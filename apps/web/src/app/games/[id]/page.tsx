'use client';

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { api } from '@/services/api';
import Navigation from '@/components/Navigation';
import Image from 'next/image';

export default function GameDetailsPage() {
  const params = useParams();
  const gameId = params.id as string;

  const { data: game, isLoading } = useQuery({
    queryKey: ['game', gameId],
    queryFn: () => api.get(`/api/games/${gameId}`).then(res => res.data),
  });

  if (isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>;
  if (!game) return <div className="flex items-center justify-center h-screen">Game not found</div>;

  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <div className="glass p-8 rounded-lg">
          {game.background_image && (
            <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={game.background_image}
                alt={game.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <h1 className="text-5xl font-bold mb-4">{game.name}</h1>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <p className="text-gray-400">Rating</p>
              <p className="text-3xl font-bold text-yellow-400">⭐ {game.rating?.toFixed(1)}</p>
            </div>
            <div>
              <p className="text-gray-400">Release Date</p>
              <p className="text-xl font-bold">{game.released || 'N/A'}</p>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-300 line-clamp-4">{game.description}</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-bold transition">
            Add to Library
          </button>
        </div>
      </div>
    </>
  );
}
