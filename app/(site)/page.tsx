import Filters from "@/components/filters"
import { getAllPosts, getCategories, getPostsByCategory } from "@/sanity/utils"
import PostItem from "@/components/post-item"
import JoinNewsletterForm from "@/components/join-newsletter-form"

export const revalidate = 60

interface Props {
   searchParams: { [key: string]: string | undefined }
}

const BlogPage = async ({ searchParams }: Props) => {
   const categories = await getCategories()
   const posts = searchParams.category
      ? await getPostsByCategory(searchParams.category)
      : await getAllPosts()

   return (
      <div className="max-width">
         <section className="max-w-2xl space-y-3">
            <h2 className="heading2">The Digital Marketer&apos;s Handbook</h2>
            <p className="body-text text-mute">
               Your go-to resource for digital marketing, social media
               management, brand promotion, and content creation
            </p>
         </section>

         <Filters categories={categories} />

         {posts.length === 0 ? (
            <p className="body-text font-bold text-center">No posts</p>
         ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
               {posts.map((post) => (
                  <PostItem key={post._id} post={post} />
               ))}
            </div>
         )}

         <div className="w-full my-16 sm:my-20 h-[1px] bg-border" />

         <div className="w-full flex flex-col items-center justify-center gap-2">
            <h2 className="heading2">Join our newsletter</h2>
            <JoinNewsletterForm />
            <p className="base-regular">Unsubscribe anytime</p>
         </div>
      </div>
   )
}

export default BlogPage
