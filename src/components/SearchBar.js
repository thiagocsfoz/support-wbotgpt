'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar({ placeholder = "Buscar ajuda..." }) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      // In a real implementation, this would navigate to search results
      // For now, we'll just navigate to a placeholder search page
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="max-w-3xl w-full">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path>
            </svg>
          </div>
          <input
            type="text"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-[var(--primary)] focus:border-[var(--primary)]"
            placeholder={placeholder}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            required
          />
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 bg-[var(--primary)] hover:bg-[var(--primary-hover)] focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-white"
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
}
