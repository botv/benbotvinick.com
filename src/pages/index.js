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
            started a company called Hyper to help folks sell memberships to Discord servers. Six months
            later I left high school, and in June 2021 we set up shop in Palo Alto. We raised $17M and then sold the business in 2023.
          </div>
              
          <div>
            Right now I'm thinking about what I might do next. If you've got any ideas for me, send me an email at benbotvinick at gmail.com.
          </div>

          <div>
            LinkedIn: <a href="https://linkedin.com/in/benbotvinick">https://linkedin.com/in/benbotvinick</a>
          </div>
        </div>
      </main>
    </div>
  );
}
