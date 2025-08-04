
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Media } from '@/types';

interface SearchBarProps {
  endpoint: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ endpoint }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Media[]>([]);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Handle clicks outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when expanded
  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  // Debounced search
  useEffect(() => {
    const performSearch = async (searchQuery: string) => {
      setLoading(true);
      try {
        const response = await fetch(`${endpoint}/search?title=${encodeURIComponent(searchQuery)}`);
        if (response.ok) {
          const data = await response.json();
          setResults(data.data || []);
          setShowResults(true);
        }
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      if (query.trim() && query.length > 2) {
        performSearch(query);
      } else {
        setResults([]);
        setShowResults(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query, endpoint]);

  const handleSearchClick = () => {
    setIsExpanded(true);
  };

  const handleResultClick = (result: Media) => {
    navigate(`/media/${result.id}`);
    setIsExpanded(false);
    setShowResults(false);
    setQuery('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setIsExpanded(false);
      setShowResults(false);
      setQuery('');
    }
  };

  return (
    <div className="relative flex-1 max-w-md mx-4" ref={searchRef}>
      {/* Search Container */}
      <div className={`
        relative flex items-center transition-all duration-300 ease-in-out
        ${isExpanded 
          ? 'bg-gray-900 border border-gray-600 rounded-lg shadow-lg' 
          : 'bg-transparent'
        }
      `}>
        {/* Search Button/Icon */}
        <button
          onClick={handleSearchClick}
          className={`
            flex items-center justify-center transition-all duration-300 ease-in-out
            ${isExpanded 
              ? 'p-3 text-gray-400 hover:text-white' 
              : 'w-10 h-10 text-gray-300 hover:text-white hover:bg-gray-800 rounded-full'
            }
          `}
          aria-label="Search"
        >
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </button>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Search movies, TV shows..."
          className={`
            bg-transparent border-none outline-none text-white placeholder-gray-400
            transition-all duration-300 ease-in-out
            ${isExpanded 
              ? 'w-full pr-4 py-2 opacity-100' 
              : 'w-0 opacity-0 pointer-events-none'
            }
          `}
        />

        {/* Loading Indicator */}
        {loading && isExpanded && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-red-600"></div>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {showResults && isExpanded && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-gray-600 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((result) => (
                <button
                  key={result.id}
                  onClick={() => handleResultClick(result)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-800 transition-colors border-b border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-red-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">
                          {result.mediaType === 'movie' ? '🎬' : '📺'}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{result.title}</p>
                      <p className="text-gray-400 text-sm capitalize">
                        {result.mediaType} {result.year && `• ${result.year}`}
                      </p>
                      {result.genre  && (
                        <p className="text-gray-500 text-xs">
                          {result.genre}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="py-8 text-center text-gray-400">
              <svg className="mx-auto h-12 w-12 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.9-6.172-2.516M12 21c2.21 0 4.21-.895 5.657-2.343" />
              </svg>
              <p>No results found for "{query}"</p>
              <p className="text-sm text-gray-500 mt-1">Try a different search term</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
