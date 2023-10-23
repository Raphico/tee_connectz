import {
   JetBrains_Mono as Font_Mono,
   Inter as Font_Sans,
} from "next/font/google"

export const font_mono = Font_Mono({
   subsets: ["latin"],
   variable: "--font-mono",
})

export const font_sans = Font_Sans({
   subsets: ["latin"],
   variable: "--font-sans",
})
