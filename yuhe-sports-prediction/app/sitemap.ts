import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.yuhe-international.com",
      lastModified: new Date(),
    },
    {
      url: "https://www.yuhe-international.com/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://www.yuhe-international.com/vip",
      lastModified: new Date(),
    },
    {
      url: "https://www.yuhe-international.com/contact",
      lastModified: new Date(),
    },
  ]
}

