import { FooterItem } from "@/types"

const links = {
   instagram: "https://www.instagram.com/tee_connectz_enterprise/",
   whatsapp: "https://wa.me/c/2348161786386",
}

export const siteConfig = {
   title: "Tee Connectz",
   description:
      "Tee connectz is a business that helps you to promote your brand, create engaging content, and manage your social media accounts. Whether you need to grow your brand awareness, reach new customers, or increase your sales, Tee connectz can help you achieve your goals with their digital marketing and social media expertise",
   url: "https://tee_connectz.vercel.app",
   og: "https://tee_connectz.vercel.app/og.png",
   links: links,
   footerNav: [
      {
         title: "socials",
         items: [
            {
               title: "Instagram",
               href: links.instagram,
               external: true,
            },
            {
               title: "Whatsapp",
               href: links.whatsapp,
               external: true,
            },
         ],
      },
   ] satisfies FooterItem[],
}
