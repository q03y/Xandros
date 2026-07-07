'use client';

import Navigation from '@/components/Navigation';

export default function ProfilePage() {
  return (
    <>
      <Navigation />
      <div className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-8">👤 My Profile</h1>
        <div className="glass p-8 rounded-lg">
          <p className="text-gray-400">Profile details coming soon...</p>
        </div>
      </div>
    </>
  );
}
