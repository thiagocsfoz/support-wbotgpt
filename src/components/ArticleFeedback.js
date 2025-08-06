'use client';

import { useState, useEffect } from 'react';

export default function ArticleFeedback({ category, article }) {
  const [feedbackStatus, setFeedbackStatus] = useState('initial'); // 'initial', 'submitted', 'error'
  const [isHelpful, setIsHelpful] = useState(null);
  const [feedbackData, setFeedbackData] = useState(null);

  // Check if user has already provided feedback for this article
  useEffect(() => {
    // Use localStorage to track which articles the user has provided feedback for
    const feedbackKey = `feedback_${category}_${article}`;
    const storedFeedback = localStorage.getItem(feedbackKey);
    
    if (storedFeedback) {
      setFeedbackStatus('submitted');
      setIsHelpful(storedFeedback === 'true');
    }

    // Fetch current feedback stats for this article
    fetchFeedbackStats();
  }, [category, article]);

  // Fetch feedback statistics for this article
  const fetchFeedbackStats = async () => {
    try {
      const response = await fetch(`/api/feedback?category=${category}&article=${article}`);
      if (response.ok) {
        const result = await response.json();
        setFeedbackData(result.data);
      }
    } catch (error) {
      console.error('Error fetching feedback stats:', error);
    }
  };

  // Submit feedback
  const submitFeedback = async (helpful) => {
    try {
      setIsHelpful(helpful);
      
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          category,
          article,
          isHelpful: helpful,
        }),
      });

      if (response.ok) {
        // Store in localStorage to prevent multiple submissions
        localStorage.setItem(`feedback_${category}_${article}`, helpful.toString());
        setFeedbackStatus('submitted');
        
        // Update feedback stats
        const result = await response.json();
        setFeedbackData(result.data);
      } else {
        setFeedbackStatus('error');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setFeedbackStatus('error');
    }
  };

  // Render different content based on feedback status
  if (feedbackStatus === 'submitted') {
    return (
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Obrigado pelo seu feedback!</h3>
        <p className="mt-2 text-sm text-gray-600">
          {isHelpful 
            ? 'Ficamos felizes que este artigo tenha sido útil para você.' 
            : 'Lamentamos que este artigo não tenha atendido às suas expectativas. Estamos trabalhando para melhorá-lo.'}
        </p>
        {feedbackData && (
          <div className="mt-4 text-sm text-gray-600">
            <p>{feedbackData.helpfulPercentage}% das pessoas acharam este artigo útil</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{ width: `${feedbackData.helpfulPercentage}%` }}
              ></div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (feedbackStatus === 'error') {
    return (
      <div className="mt-12 pt-6 border-t border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Ocorreu um erro</h3>
        <p className="mt-2 text-sm text-gray-600">
          Não foi possível registrar seu feedback. Por favor, tente novamente mais tarde.
        </p>
        <button 
          onClick={() => setFeedbackStatus('initial')}
          className="mt-2 text-sm text-blue-600 hover:text-blue-800"
        >
          Tentar novamente
        </button>
      </div>
    );
  }

  return (
    <div className="mt-12 pt-6 border-t border-gray-200">
      <h3 className="text-lg font-medium text-gray-900">Este artigo foi útil?</h3>
      <div className="mt-2 flex space-x-4">
        <button 
          onClick={() => submitFeedback(true)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-blue-500 transition-colors"
        >
          Sim, ajudou
        </button>
        <button 
          onClick={() => submitFeedback(false)}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-red-500 transition-colors"
        >
          Não, preciso de mais ajuda
        </button>
      </div>
    </div>
  );
}