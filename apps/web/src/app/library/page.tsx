'use client';

import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import Navigation from '@/components/Navigation';
import { useEffect } from 'react';

export default function LibraryPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    if (!user) {
      router.push('/auth/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">📚 My Library</h1>
        <div className="glass p-8 rounded-lg text-center">
          <p className="text-gray-400">Your game library will appear here</p>
        </div>
      </div>
    </>
  );
}
