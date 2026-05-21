import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mentoria.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FDFBF7" },
    { media: "(prefers-color-scheme: dark)", color: "#166534" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mentoria — where kids meet themselves",
    template: "%s · Mentoria",
  },
  description:
    "An AI mentor walks beside your child through six themed worlds — turning daily curiosity into real-world action, one small quest at a time. For curious 8–11 year-olds.",
  keywords: [
    "AI mentor for kids",
    "social-emotional learning",
    "mindful screen time",
    "kids self-discovery app",
    "AI tutor 8–11",
    "homeschool companion",
    "parent weekly digest",
    "Mentoria",
  ],
  authors: [{ name: "Mentoria" }],
  creator: "Mentoria",
  publisher: "Mentoria",
  category: "education",
  applicationName: "Mentoria",
  formatDetection: { telephone: false, email: false, address: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Mentoria",
    title: "Mentoria — where kids meet themselves",
    description:
      "An AI mentor walks beside your child through six themed worlds. Made for curious 8–11 year-olds. Built around you.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mentoria — where kids meet themselves",
    description:
      "An AI mentor walks beside your child through six themed worlds. Made for curious 8–11 year-olds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}#org`,
      name: "Mentoria",
      url: siteUrl,
      logo: `${siteUrl}/icon.svg`,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}#site`,
      url: siteUrl,
      name: "Mentoria",
      publisher: { "@id": `${siteUrl}#org` },
      inLanguage: "en-US",
    },
    {
      "@type": "Product",
      name: "Mentoria",
      description:
        "An AI mentor for curious 8–11 year-olds, with six themed worlds and a weekly digest for parents.",
      brand: { "@id": `${siteUrl}#org` },
      audience: {
        "@type": "PeopleAudience",
        suggestedMinAge: 8,
        suggestedMaxAge: 11,
      },
      offers: [
        {
          "@type": "Offer",
          name: "Try it (USD)",
          price: "0",
          priceCurrency: "USD",
          description: "Free first 7 days",
        },
        {
          "@type": "Offer",
          name: "Try it (PHP)",
          price: "0",
          priceCurrency: "PHP",
          description: "Free first 7 days",
        },
        {
          "@type": "Offer",
          name: "Together (USD)",
          price: "12",
          priceCurrency: "USD",
          description: "Family plan, billed monthly",
        },
        {
          "@type": "Offer",
          name: "Together (PHP)",
          price: "699",
          priceCurrency: "PHP",
          description: "Family plan, billed monthly",
        },
        {
          "@type": "Offer",
          name: "Siblings (USD)",
          price: "22",
          priceCurrency: "USD",
          description: "Up to 3 kids, billed monthly",
        },
        {
          "@type": "Offer",
          name: "Siblings (PHP)",
          price: "1299",
          priceCurrency: "PHP",
          description: "Up to 3 kids, billed monthly",
        },
      ],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
