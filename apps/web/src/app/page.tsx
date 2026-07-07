'use client';

import Navigation from '@/components/Navigation';
import GameGrid from '@/components/GameGrid';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-4">Welcome to Xandros 🎮</h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover games, connect with gamers, and explore the ultimate gaming community
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">🔥 Trending Games</h2>
          <GameGrid endpoint="/api/games/trending" />
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">✨ New Releases</h2>
          <GameGrid endpoint="/api/games/new-releases" />
        </div>
      </div>
    </>
  );
}
