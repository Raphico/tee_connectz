import { Category } from "@/types"
import { groq } from "next-sanity"
import { client } from "./lib/client"

export const getCategories = async (): Promise<Category[]> => {
   try {
      return await client.fetch(groq`*[_type == "tag"]{
         _id,
         name,
         "slug": slug.current,
         description
      }`)
   } catch (error) {
      console.error(error)
      return []
   }
}
