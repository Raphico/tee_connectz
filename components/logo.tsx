import { siteConfig } from "@/config/site"
import Image from "next/image"

const Logo = () => {
   return (
      <div>
         <Image
            src="/logo.png"
            alt={`${siteConfig.title}'s logo`}
            width={30}
            height={30}
            className="rounded-full"
         />
      </div>
   )
}

export default Logo
