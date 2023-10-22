import type { Metadata } from "next"
import "./globals.css"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
   metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL),
   title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.title}`,
   },
   description: siteConfig.description,
   keywords: [
      "content creation",
      "digital marketing",
      "social media management",
      "brand promotion",
      "online presence",
      "seo optimization",
   ],
   openGraph: {
      type: "website",
      locale: "en_NG",
      url: siteConfig.url,
      title: siteConfig.title,
      description: siteConfig.description,
      siteName: siteConfig.title,
   },
   twitter: {
      card: "summary_large_image",
      title: siteConfig.title,
      description: siteConfig.description,
      images: [`${siteConfig.url}/og.png`],
   },
   icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon-16x16.png",
      apple: "/apple-touch-icon.png",
   },
   manifest: `${siteConfig.url}/site.webmanifest`,
}

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   )
}
