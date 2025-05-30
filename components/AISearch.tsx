
import React, { useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { generateTextWithGemini } from '../services/geminiService';
import { GroundingChunk, GroundingMetadata } from '../types';

const AISearch: React.FC = () => {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [groundingMetadata, setGroundingMetadata] = useState<GroundingMetadata | undefined>(undefined);
  const [useGoogleSearch, setUseGoogleSearch] = useState<boolean>(true);


  const handleSearch = useCallback(async () => {
    if (!query.trim()) return;
    setIsLoading(true);
    setError(null);
    setResult(null);
    setGroundingMetadata(undefined);

    try {
      // Simple prompt, can be more sophisticated
      const prompt = `You are a helpful campus resource assistant. A student is asking: "${query}". Provide a concise and helpful answer. If relevant, suggest resource categories or search terms. If the query is about recent events or requires up-to-date information, utilize your search capabilities.`;
      const geminiResponse = await generateTextWithGemini(prompt, useGoogleSearch);
      setResult(geminiResponse.text);
      if (geminiResponse.groundingMetadata && geminiResponse.groundingMetadata.groundingChunks) {
        setGroundingMetadata(geminiResponse.groundingMetadata);
      }
    } catch (err) {
      setError(t('aiError'));
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [query, t, useGoogleSearch]);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">{t('aiSearchTitle')}</h2>
      
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('aiSearchPlaceholder') as string}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          disabled={isLoading}
        />
      </div>
      
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          id="useGoogleSearch"
          checked={useGoogleSearch}
          onChange={(e) => setUseGoogleSearch(e.target.checked)}
          className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          disabled={isLoading}
        />
        <label htmlFor="useGoogleSearch" className="ml-2 block text-sm text-gray-900">
          Use Google Search for up-to-date information (recommended for recent events/news)
        </label>
      </div>

      <button
        onClick={handleSearch}
        disabled={isLoading || !query.trim()}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
      >
        {isLoading ? t('aiSearching') : t('buttonSearch')}
      </button>

      {error && <div className="mt-6 p-4 rounded-md bg-red-100 text-red-700">{error}</div>}
      
      {result && (
        <div className="mt-6 p-6 border border-gray-200 rounded-lg bg-gray-50">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">AI Response:</h3>
          <div className="prose prose-indigo max-w-none text-gray-700 whitespace-pre-wrap">
            {result}
          </div>
          {groundingMetadata && groundingMetadata.groundingChunks && groundingMetadata.groundingChunks.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h4 className="text-md font-semibold text-gray-700 mb-2">{t('searchGroundingSources')}</h4>
              <ul className="list-disc list-inside space-y-1">
                {groundingMetadata.groundingChunks.map((chunk: GroundingChunk, index: number) =>
                  chunk.web && chunk.web.uri ? (
                    <li key={index} className="text-sm">
                      <a href={chunk.web.uri} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                        {chunk.web.title || chunk.web.uri}
                      </a>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          )}
        </div>
      )}
      {!isLoading && !error && !result && query && (
         // This state can be reached if search was successful but yielded empty text.
         // Or if handleSearch was called but resulted in no result before error.
         // A more specific message like "No results from AI" might be better if that's the case.
         // For now, this handles cases where search completed but didn't populate `result`.
        <div className="mt-6 text-center text-gray-500">{/* No specific message for this state currently */}</div>
      )}
    </div>
  );
};

export default AISearch;
    