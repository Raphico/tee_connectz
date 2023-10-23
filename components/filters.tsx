"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Category } from "@/types"

interface FiltersProps {
   categories: Category[]
}

const Filters = ({ categories }: FiltersProps) => {
   const searchParams = useSearchParams()
   const router = useRouter()

   const handleFilter = (slug: string) => {
      const newUrl = slug
         ? `${window.location.origin}?category=${slug}`
         : `${window.location.origin}`

      router.push(newUrl, { scroll: false })
   }

   return (
      <ul className="flex w-full flex-wrap gap-2 overflow-auto pt-16 pb-10 sm:pb-12">
         <button
            className={cn("btn category-btn", {
               "bg-accent/10 text-accent": !searchParams.has("category"),
            })}
            onClick={() => handleFilter("")}
         >
            All Category
         </button>

         {categories.map((category) => (
            <button
               key={category._id}
               className={cn("btn category-btn", {
                  "bg-accent/10 text-accent":
                     searchParams.get("category") === category.slug,
               })}
               onClick={() => handleFilter(category.slug)}
            >
               {category.name}
            </button>
         ))}
      </ul>
   )
}

export default Filters
