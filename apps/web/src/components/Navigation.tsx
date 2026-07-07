'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';

export default function Navigation() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  return (
    <nav className="glass sticky top-0 z-50 px-6 py-4 flex items-center justify-between soft-shadow">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          🎮 Xandros
        </Link>
        <div className="flex gap-6">
          <Link href="/games" className="hover:text-blue-300 transition">
            Games
          </Link>
          <Link href="/news" className="hover:text-blue-300 transition">
            News
          </Link>
          <Link href="/reels" className="hover:text-blue-300 transition">
            Reels
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search games..."
          className="bg-white bg-opacity-10 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {user ? (
          <div className="flex gap-4 items-center">
            <Link href="/library" className="hover:text-blue-300 transition">
              📚 Library
            </Link>
            <Link href="/profile" className="hover:text-blue-300 transition">
              👤 {user.username}
            </Link>
            <button
              onClick={() => {
                logout();
                router.push('/');
              }}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link href="/auth/login" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
              Login
            </Link>
            <Link href="/auth/register" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
