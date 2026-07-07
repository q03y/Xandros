'use client';

import Navigation from '@/components/Navigation';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export default function NewsPage() {
  const { data: news, isLoading } = useQuery({
    queryKey: ['news'],
    queryFn: () => api.get('/api/news').then(res => res.data),
  });

  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">📰 Gaming News</h1>
        <div className="space-y-6">
          {isLoading ? (
            <div className="text-center">Loading news...</div>
          ) : (
            news?.map((article: any) => (
              <div key={article.id} className="glass p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-300 mb-4">{article.content?.substring(0, 200)}...</p>
                <p className="text-gray-500 text-sm">Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
