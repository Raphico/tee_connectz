import Image from "next/image"
import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"

export const PortableTextComponents = {
   types: {
      image: ({ value }: any) => {
         return (
            <div className="relative w-full h-96 mx-auto m-10 z-0">
               <Image
                  src={urlForImage(value).url()}
                  alt={value.alt || ""}
                  fill
                  className="object-contain"
               />
            </div>
         )
      },
   },
   list: {
      bullet: ({ children }: any) => (
         <ul className="pl-10 list-disc space-y-5 body-regular !mt-8">
            {children}
         </ul>
      ),
      number: ({ children }: any) => (
         <ol className="pl-10 list-decimal space-y-5 body-regular !mt-8">
            {children}
         </ol>
      ),
   },
   block: {
      h1: ({ children }: any) => (
         <h1 className="text-3xl sm:text-4xl font-bold">{children}</h1>
      ),
      h2: ({ children }: any) => (
         <h2 className="text-2xl sm:text-3xl font-bold">{children}</h2>
      ),
      h3: ({ children }: any) => (
         <h3 className="text-xl sm:text-2xl font-bold">{children}</h3>
      ),
      h4: ({ children }: any) => (
         <h4 className="text-lg sm:text-xl font-bold">{children}</h4>
      ),
      blockquote: ({ children }: any) => (
         <blockquote className="border-l-4 p-5">{children}</blockquote>
      ),
      normal: ({ children }: any) => (
         <p className="body-text !mt-4">{children}</p>
      ),
   },
   marks: {
      link: ({ value, children }: any) => {
         const target = (value?.href || "").startsWith("http")
            ? "_blank"
            : undefined
         const rel = !value.href.startsWith("/")
            ? "noreferrer noopener "
            : undefined
         return (
            <Link href={value?.href} target={target} rel={rel}>
               {children}
            </Link>
         )
      },
   },
}
