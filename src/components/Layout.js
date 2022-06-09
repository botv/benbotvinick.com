import React from 'react';
import { NextSeo } from 'next-seo';

export default function Layout({ children, title }) {
  return (
    <div>
      <NextSeo title={`${title} – Ben Botvinick`} />

      <main className="py-8 px-12 overflow-hidden">
        {children}
      </main>
    </div>
  );
}
