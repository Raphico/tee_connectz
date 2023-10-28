import { Category } from "@/types"
import { groq } from "next-sanity"
import { client } from "./lib/client"
import { PostItem } from "@/types"

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

export const getAllPosts = async (): Promise<PostItem[]> => {
   try {
      return await client.fetch(groq`*[_type == "post"] | order(publishedAt desc) {
         _id,
         title,
         "image": image.asset->url,
         "slug": slug.current,
         categories[]->{
            _id,
            "slug": slug.current,
            name,
            description
         },
         publishedAt,     
      }`)
   } catch (error) {
      console.error(error)
      return []
   }
}

export const getPostsByCategory = async (
   category: string
): Promise<PostItem[]> => {
   try {
      return await client.fetch(
         `*[_type == "post" && references(*[_type == "tag" && slug.current == $category]._id)] | order(publishedAt desc) {
         _id,
         title,
         "image": image.asset->url,
         "slug": slug.current,
         categories[]->{
            _id,
            "slug": slug.current,
            name,
            description
         },
         publishedAt,     
      }`,
         { category }
      )
   } catch (error) {
      console.error(error)
      return []
   }
}

export const getPost = async (slug: string): Promise<PostItem> => {
   return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      description,
      "image": image.asset->url,
      "slug": slug.current,
      categories[]->{
         _id,
         "slug": slug.current,
         name,
         description
      },
      author->{
         _id,
         name,
         "image": image.asset->url
      },
      publishedAt, 
      content,
   }`,
      { slug }
   )
}
