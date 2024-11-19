import { metaData } from "@/src/config";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
