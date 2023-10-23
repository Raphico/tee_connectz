export interface Category {
   _id: string
   name: string
   slug: string
   description: string
}

export interface PostItem {
   _id: string
   title: string
   description: string
   slug: string
   image: string
   publishedAt: string
   categories: Category[]
   content: PortableTextBlock[]
}
