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

        <div className="mt-10 space-y-6 text-md max-w-prose">
          <div>
            When I was fourteen, I learned how to code so I could pull pranks on my buddies. When I was seventeen, I
            started a company called{' '}
            <a href="https://hyper.co" target="_blank" rel="noreferrer" className="underline">Hyper</a>. Six months
            later I left high school, and in June 2021 we set up shop in Palo Alto.
          </div>

          <div>
            If you want to get in touch with me, my email is{' '}
            <a href="https://hyper.co" target="_blank" rel="noreferrer" className="underline">ben@hyper.co</a>. I love
            nothing more than a really good cold email.
          </div>
        </div>
      </main>
    </div>
  );
}
