import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://mentoria.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/#how`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/#worlds`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/#parents`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/#pricing`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
