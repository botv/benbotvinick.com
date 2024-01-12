import React from 'react';
import { NextSeo } from 'next-seo';

export default function Home() {
  return (
    <div>
      <NextSeo title="Ben Botvinick" />

      <main className="h-screen bg-gray-50 py-8 px-12 overflow-hidden">
        <h1 className="text-6xl sm:text-8xl text-gray-800 font-black -ml-2 font-serif md:-ml-3">
          Ben<br />
          Botvinick
        </h1>
      </main>
    </div>
  );
}
