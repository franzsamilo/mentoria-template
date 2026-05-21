import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentoria — where kids meet themselves",
  description:
    "An AI mentor walks beside your child through six themed worlds — turning daily curiosity into real-world action, one small quest at a time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&family=Instrument+Serif:ital@0;1&family=Poppins:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
