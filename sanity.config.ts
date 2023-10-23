/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

import { theme } from "https://themer.sanity.build/api/hues?primary=245eaf"

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"
import StudioNav from "./components/stuido-nav"
import Logo from "./components/logo"

export default defineConfig({
   theme,
   basePath: "/admin",
   projectId,
   dataset,
   studio: {
      components: {
         logo: Logo,
         navbar: StudioNav,
      },
   },
   // Add and edit the content schema in the './sanity/schema' folder
   schema,
   plugins: [
      deskTool(),
      // Vision is a tool that lets you query your content with GROQ in the studio
      // https://www.sanity.io/docs/the-vision-plugin
      visionTool({ defaultApiVersion: apiVersion }),
   ],
})
