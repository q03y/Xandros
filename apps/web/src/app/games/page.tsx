'use client';

import Navigation from '@/components/Navigation';
import GameGrid from '@/components/GameGrid';

export default function GamesPage() {
  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">🎮 Explore Games</h1>
        <GameGrid endpoint="/api/games/trending" />
      </div>
    </>
  );
}
