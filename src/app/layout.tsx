import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-williams",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Williams Racing | Heritage & Future",
  description: "A cinematic storytelling experience of Williams Racing's legacy and future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload fonts if critical or rely on next/font which we manually did via css */}
      </head>
      <body
        className={`${exo2.variable} antialiased bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
