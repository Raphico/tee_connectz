import { PostItem } from "@/types"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"

interface PostItemProps {
   post: PostItem
}

const PostItem = ({ post }: PostItemProps) => {
   return (
      <div className="flex flex-col items-start gap-4">
         <Link
            className="relative block shadow-md w-full h-56 z-0"
            href={`/${post.slug}`}
            tabIndex="-1"
            aria-hidden="true"
         >
            <Image
               src={post.image}
               alt={`${post.title} featured image`}
               fill
               className="rounded-md"
            />
         </Link>

         <div className="flex items-center gap-3">
            {post.categories.map((category) => (
               <Link
                  key={category._id}
                  href={`?category=${category.slug}`}
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
         <Link href={`/${post.slug}`} className="hover:underline heading3">
            {post.title}
         </Link>
      </div>
   )
}

export default PostItem
