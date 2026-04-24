import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shafwanulhaquechowdhury.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://shafwanulhaquechowdhury.vercel.app/projects/chainnative/merchant",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    // add other project pages
  ];
}