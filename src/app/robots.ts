import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/politica-de-cancelamento",
          "/termos-de-uso",
          "/politica-de-privacidade",
          "/api/",
        ],
      },
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
    ],
    sitemap: "https://espacomcortes.vercel.app/sitemap.xml",
  }
}