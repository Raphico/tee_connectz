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
