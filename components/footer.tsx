import { siteConfig } from "@/config/site"
import Logo from "./logo"
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
   return (
      <footer className="flex items-center justify-center text-center flex-col gap-6">
         <div className="flex items-center gap-2">
            <Logo />
            <h3 className="font-mono uppercase base-regular font-bold">
               {siteConfig.title}
            </h3>
         </div>

         <ul className="flex items-center gap-4">
            {siteConfig.links.map((link) => (
               <Link
                  className="hover:bg-border/50 p-2 rounded-md"
                  key={link.name}
                  href={link.href}
               >
                  <Image
                     src={link.icon}
                     alt={`${link.name} icon`}
                     width={25}
                     height={25}
                  />
               </Link>
            ))}
         </ul>

         <p className="text-mute base-regular">
            &copy; 2023 All rights reserved
         </p>
      </footer>
   )
}

export default Footer
