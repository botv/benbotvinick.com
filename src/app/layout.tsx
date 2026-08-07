import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ben Botvinick",
  description: "The personal website of a human being named Ben Botvinick.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: '"Times New Roman", Times, serif' }}
        className="text-[12pt] bg-white text-black"
      >
        {children}
      </body>
    </html>
  );
}
