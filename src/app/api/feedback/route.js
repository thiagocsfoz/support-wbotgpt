import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the feedback data file
const feedbackFilePath = path.join(process.cwd(), 'data', 'feedback.json');

// Ensure the data directory exists
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  fs.mkdirSync(dirname, { recursive: true });
};

// Get existing feedback data or initialize if it doesn't exist
const getFeedbackData = () => {
  try {
    if (!fs.existsSync(feedbackFilePath)) {
      ensureDirectoryExists(feedbackFilePath);
      fs.writeFileSync(feedbackFilePath, JSON.stringify({}));
      return {};
    }
    const data = fs.readFileSync(feedbackFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading feedback data:', error);
    return {};
  }
};

// Save feedback data to file
const saveFeedbackData = (data) => {
  try {
    ensureDirectoryExists(feedbackFilePath);
    fs.writeFileSync(feedbackFilePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error saving feedback data:', error);
    return false;
  }
};

// Handle POST requests to record feedback
export async function POST(request) {
  try {
    const { category, article, isHelpful } = await request.json();

    // Validate required fields
    if (!category || !article || isHelpful === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get existing feedback data
    const feedbackData = getFeedbackData();

    // Create category and article entries if they don't exist
    if (!feedbackData[category]) {
      feedbackData[category] = {};
    }
    
    if (!feedbackData[category][article]) {
      feedbackData[category][article] = {
        helpful: 0,
        notHelpful: 0,
        totalVotes: 0,
        helpfulPercentage: 0
      };
    }

    // Update feedback counts
    const articleFeedback = feedbackData[category][article];
    if (isHelpful) {
      articleFeedback.helpful += 1;
    } else {
      articleFeedback.notHelpful += 1;
    }
    
    // Update totals and percentage
    articleFeedback.totalVotes = articleFeedback.helpful + articleFeedback.notHelpful;
    articleFeedback.helpfulPercentage = Math.round(
      (articleFeedback.helpful / articleFeedback.totalVotes) * 100
    );

    // Save updated feedback data
    saveFeedbackData(feedbackData);

    return NextResponse.json({ success: true, data: articleFeedback });
  } catch (error) {
    console.error('Error processing feedback:', error);
    return NextResponse.json(
      { error: 'Failed to process feedback' },
      { status: 500 }
    );
  }
}

// Handle GET requests to retrieve feedback for an article
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const article = searchParams.get('article');

    // If no category or article specified, return all feedback data
    if (!category || !article) {
      const feedbackData = getFeedbackData();
      return NextResponse.json({ data: feedbackData });
    }

    // Get feedback for the specified article
    const feedbackData = getFeedbackData();
    const articleFeedback = feedbackData[category]?.[article] || {
      helpful: 0,
      notHelpful: 0,
      totalVotes: 0,
      helpfulPercentage: 0
    };

    return NextResponse.json({ data: articleFeedback });
  } catch (error) {
    console.error('Error retrieving feedback:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve feedback' },
      { status: 500 }
    );
  }
}