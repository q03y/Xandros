'use client';

import Link from 'next/link';
import Image from 'next/image';

interface GameCardProps {
  game: {
    id: number | string;
    name?: string;
    title?: string;
    background_image?: string;
    imageUrl?: string;
    rating?: number;
  };
}

export default function GameCard({ game }: GameCardProps) {
  const title = game.name || game.title || 'Unknown Game';
  const image = game.background_image || game.imageUrl;
  const rating = game.rating || 0;

  return (
    <Link href={`/games/${game.id}`}>
      <div className="glass hover:scale-105 transition cursor-pointer overflow-hidden rounded-lg">
        {image && (
          <div className="relative w-full h-48">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="p-4">
          <h3 className="font-bold text-lg truncate">{title}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-yellow-400">⭐ {rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
