import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/data/blog";
import { resources } from "@/lib/data/resources";
import { aiWorkforce } from "@/lib/data/ai-workforce";

const siteUrl = "https://aiqen.com";

const staticRoutes = [
  "",
  "/about",
  "/services",
  "/solutions",
  "/industries",
  "/ai-workforce",
  "/resources",
  "/integrations",
  "/assessment",
  "/roi-calculator",
  "/case-studies",
  "/pricing",
  "/faq",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const resourceEntries: MetadataRoute.Sitemap = resources.map((resource) => ({
    url: `${siteUrl}/resources/${resource.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const workforceEntries: MetadataRoute.Sitemap = aiWorkforce.map((employee) => ({
    url: `${siteUrl}/ai-workforce/${employee.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries, ...resourceEntries, ...workforceEntries];
}
