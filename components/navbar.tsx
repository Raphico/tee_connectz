import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site"

const Navbar = () => {
   return (
      <header className="w-full border-b py-4">
         <nav className="max-width">
            <Link className="flex items-center gap-2" href="/blog">
               <Image
                  src="/logo.png"
                  alt={`${siteConfig.title} logo`}
                  width={40}
                  height={40}
                  className="rounded-full"
               />
               <h3 className="font-mono uppercase heading3">
                  {siteConfig.title}
               </h3>
            </Link>
         </nav>
      </header>
   )
}

export default Navbar
