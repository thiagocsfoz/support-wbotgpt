import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Path to the feedback data file
const feedbackFilePath = path.join(process.cwd(), 'data', 'feedback.json');

// Get existing feedback data
const getFeedbackData = () => {
  try {
    if (!fs.existsSync(feedbackFilePath)) {
      return {};
    }
    const data = fs.readFileSync(feedbackFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading feedback data:', error);
    return {};
  }
};

// Get article data from the main article data object
const getArticleData = () => {
  try {
    // Import the article data from the article page
    // This is a simplified approach - in a real app, you'd use a database
    const { default: ArticlePage } = require('../../[category]/[article]/page');
    
    // Extract the articleData object
    // This is a bit hacky, but works for this demo
    const articleDataString = ArticlePage.toString();
    const articleDataMatch = articleDataString.match(/const articleData = ({[\s\S]*?});/);
    
    if (articleDataMatch && articleDataMatch[1]) {
      // Use eval to parse the object (not recommended for production)
      // In a real app, you'd use a proper database or API
      return eval(`(${articleDataMatch[1]})`);
    }
    
    return {};
  } catch (error) {
    console.error('Error getting article data:', error);
    return {};
  }
};

// Handle GET requests to retrieve top articles
export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = parseInt(searchParams.get('limit') || '5', 10);
    
    // Get feedback data
    const feedbackData = getFeedbackData();
    
    // Prepare ranked articles
    let rankedArticles = [];
    
    // Process all categories or just the specified one
    const categoriesToProcess = category ? [category] : Object.keys(feedbackData);
    
    for (const cat of categoriesToProcess) {
      if (feedbackData[cat]) {
        for (const [articleSlug, articleFeedback] of Object.entries(feedbackData[cat])) {
          // Only include articles with at least 1 vote
          if (articleFeedback.totalVotes > 0) {
            rankedArticles.push({
              category: cat,
              article: articleSlug,
              helpfulPercentage: articleFeedback.helpfulPercentage,
              totalVotes: articleFeedback.totalVotes
            });
          }
        }
      }
    }
    
    // Sort by helpfulPercentage (descending) and then by totalVotes (descending)
    rankedArticles.sort((a, b) => {
      if (b.helpfulPercentage !== a.helpfulPercentage) {
        return b.helpfulPercentage - a.helpfulPercentage;
      }
      return b.totalVotes - a.totalVotes;
    });
    
    // Limit the number of results
    rankedArticles = rankedArticles.slice(0, limit);
    
    // Add article metadata (title, description)
    const articleData = getArticleData();
    rankedArticles = rankedArticles.map(item => {
      const metadata = articleData[item.category]?.[item.article] || {};
      return {
        ...item,
        title: metadata.title || 'Unknown Article',
        description: metadata.description || ''
      };
    });
    
    return NextResponse.json({ data: rankedArticles });
  } catch (error) {
    console.error('Error retrieving top articles:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve top articles' },
      { status: 500 }
    );
  }
}