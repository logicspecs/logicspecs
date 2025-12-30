import React from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Technical Logic <br />
          <span className="text-gray-400 font-medium">for every Apple device.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          Compare specs, track benchmarks, and get expert upgrade advice 
          for iPhone, Mac, and more.
        </p>
        
        {/* Search Bar Vibe */}
        <div className="max-w-xl mx-auto relative">
          <input 
            type="text" 
            placeholder="Search iPhone 16 Pro, MacBook M3..." 
            className="w-full p-4 rounded-2xl bg-gray-100 border-none focus:ring-2 focus:ring-blue-500 text-lg transition-all outline-none"
          />
          <div className="absolute right-4 top-4 text-gray-400">
            <kbd className="bg-white px-2 py-1 rounded border shadow-sm text-xs">⌘ K</kbd>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {['iPhone', 'iPad', 'Mac', 'Watch'].map((item) => (
          <div key={item} className="p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer text-center border border-gray-100">
            <h3 className="text-lg font-semibold">{item}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}