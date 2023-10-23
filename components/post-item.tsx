import { PostItem } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

interface PostItemProps {
   post: PostItem
}

const PostItem = ({ post }: PostItemProps) => {
   return (
      <div className="flex flex-col items-start gap-2">
         <Link
            className="relative block shadow-md w-full h-56 z-0"
            href={`/${post.slug}`}
         >
            <Image
               src={post.image}
               alt={`${post.title} featured image`}
               fill
               className="rounded-md"
            />
         </Link>

         <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
               <Image
                  src={post.author.image}
                  alt="author image"
                  width={30}
                  height={30}
                  className="rounded-full"
               />
               <p className="base-bold">{post.author.name}</p>
            </div>

            <p className="text-tag-foreground base-regular">
               {formatDate(post.publishedAt)}
            </p>
         </div>
         <Link
            href={`/blog/${post.slug}`}
            className="hover:underline paragraph-bold"
         >
            {post.title}
         </Link>
         {post.categories.map((category) => (
            <Link
               key={category._id}
               href={`?category=${category.slug}`}
               className="btn text-[.75em] px-2.5 py-0.5 rounded-full"
            >
               {category.name}
            </Link>
         ))}
      </div>
   )
}

export default PostItem