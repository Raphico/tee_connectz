import Filters from "@/components/filters"
import { getCategories } from "@/sanity/utils"

export const revalidate = 60

const BlogPage = async () => {
   const categories = await getCategories()
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
      </div>
   )
}

export default BlogPage
