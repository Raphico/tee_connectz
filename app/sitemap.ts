import { absoluteUrl } from "@/lib/utils"
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: absoluteUrl("/blog"),
         lastModified: new Date(),
      },
   ]
}
