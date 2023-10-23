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
                  width={30}
                  height={30}
                  className="rounded-full"
               />
               <h3 className="font-mono uppercase text-[20px] font-bold">
                  {siteConfig.title}
               </h3>
            </Link>
         </nav>
      </header>
   )
}

export default Navbar
