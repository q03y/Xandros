'use client';

import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import GameCard from './GameCard';

export default function GameGrid({ endpoint }: { endpoint: string }) {
  const { data: games, isLoading, error } = useQuery({
    queryKey: [endpoint],
    queryFn: () => api.get(endpoint).then(res => res.data),
  });

  if (isLoading) return <div className="text-center py-8">Loading games...</div>;
  if (error) return <div className="text-center py-8 text-red-500">Error loading games</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {games?.map((game: any) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
