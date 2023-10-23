import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { absoluteUrl, formatDate } from "@/lib/utils"

import { getAllPosts, getPost } from "@/sanity/utils"
import { PortableText } from "@portabletext/react"
import { PortableTextComponents } from "@/components/portable-text-components"

interface Props {
   params: {
      slug: string
   }
}

export const revalidate = 60

export async function generateStaticParams() {
   const posts = await getAllPosts()

   return posts.map((post) => ({
      slug: post.slug,
   }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const post = await getPost(params.slug)

   return {
      metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
      title: post.title,
      description: post.description,
      openGraph: {
         title: post.title,
         description: post.description,
         url: absoluteUrl(`/${post.slug}`),
         siteName: process.env.NEXT_PUBLIC_APP_URL,
         locale: "en_NG",
         type: "article",
         publishedTime: post.publishedAt,
         images: [post.image],
         authors: ["Tee Connectz"],
      },
      twitter: {
         card: "summary_large_image",
         title: post.title,
         description: post.description,
         images: [post.image],
      },
   }
}

const PostPage = async ({ params }: Props) => {
   const post = await getPost(params.slug)

   if (!post) {
      return notFound()
   }

   return (
      <main className="w-full max-w-3xl mx-auto px-6 space-y-10 y-paddings">
         <div className="space-y-5">
            <h1 className="post-title">{post.title}</h1>
            <p className="body-regular text-tag-foreground">
               {post.description}
            </p>

            <div className="flex items-center gap-3">
               {post.categories.map((category) => (
                  <Link
                     key={category._id}
                     href={`?tag=${category.slug}`}
                     className="btn text-accent bg-accent/10 base-regular px-2.5 py-0.5 rounded-full"
                  >
                     {category.name}
                  </Link>
               ))}
               <p className="text-mute body-text">•</p>
               <p className="text-mute base-regular">
                  {formatDate(post.publishedAt)}
               </p>
            </div>
         </div>

         <div className="relative block shadow-md w-full h-96 z-0">
            <Image
               src={post.image}
               alt={`${post.title} featured image`}
               fill
               className="rounded-md"
            />
         </div>

         <PortableText
            value={post.content}
            components={PortableTextComponents}
         />
      </main>
   )
}

export default PostPage
