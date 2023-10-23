export interface FooterItem {
   title: string
   items: {
      title: string
      href: string
      external: boolean
   }[]
}

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
   author: {
      _id: string
      name: string
      image: string
   }
   content: PortableTextBlock[]
}
