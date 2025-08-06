'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TopArticles({ category, limit = 5 }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        setLoading(true);
        
        // Build the API URL with query parameters
        let url = '/api/top-articles';
        const params = new URLSearchParams();
        
        if (category) {
          params.append('category', category);
        }
        
        if (limit) {
          params.append('limit', limit.toString());
        }
        
        if (params.toString()) {
          url += `?${params.toString()}`;
        }
        
        // Fetch the data
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error('Failed to fetch top articles');
        }
        
        const result = await response.json();
        setArticles(result.data || []);
      } catch (err) {
        console.error('Error fetching top articles:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopArticles();
  }, [category, limit]);

  if (loading) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Artigos Mais Úteis</h2>
        <div className="mt-4 space-y-2">
          <div className="animate-pulse h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="animate-pulse h-6 bg-gray-200 rounded w-2/3"></div>
          <div className="animate-pulse h-6 bg-gray-200 rounded w-4/5"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Artigos Mais Úteis</h2>
        <p className="mt-2 text-sm text-red-600">Erro ao carregar artigos: {error}</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900">Artigos Mais Úteis</h2>
        <p className="mt-2 text-sm text-gray-600">
          Ainda não temos dados suficientes para mostrar os artigos mais úteis.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold text-gray-900">Artigos Mais Úteis</h2>
      <ul className="mt-4 space-y-4">
        {articles.map((article, index) => (
          <li key={`${article.category}-${article.article}`} className="border-b border-gray-200 pb-4 last:border-b-0">
            <Link 
              href={`/${article.category}/${article.article}`}
              className="block hover:bg-gray-50 rounded-lg p-3 -m-3 transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 text-blue-800 font-semibold rounded-full w-8 h-8 flex items-center justify-center">
                  {index + 1}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{article.description}</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${article.helpfulPercentage}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {article.helpfulPercentage}% útil ({article.totalVotes} votos)
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}