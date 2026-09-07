import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo/site";

const routes = ["", "/services", "/premium-services", "/team", "/areas", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
  }));
}
