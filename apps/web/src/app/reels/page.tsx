'use client';

import Navigation from '@/components/Navigation';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';

export default function ReelsPage() {
  const { data: reels, isLoading } = useQuery({
    queryKey: ['reels'],
    queryFn: () => api.get('/api/reels').then(res => res.data),
  });

  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">🎬 Reels</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="text-center col-span-3">Loading reels...</div>
          ) : (
            reels?.map((reel: any) => (
              <div key={reel.id} className="glass rounded-lg overflow-hidden">
                <video
                  src={reel.videoUrl}
                  controls
                  className="w-full aspect-video bg-black"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{reel.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">{reel.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
