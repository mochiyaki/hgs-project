import React from 'react';
import Header from '../components/Header';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h2 className="text-xl font-semibold mb-2">Welcome to the Food Ordering App</h2>
        <p className="text-gray-700">Browse our menu and place your order.</p>
      </main>
    </div>
  );
}
