import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "hsl(var(--background))",
            foreground: "hsl(var(--foreground))",
            accent: "hsl(var(--accent))",
            border: "hsl(var(--border))",
            mute: "hsl(var(--mute))",
         },
         fontFamily: {
            sans: ["var(--font-sans)", ...fontFamily.sans],
            mono: ["var(--font-mono)", ...fontFamily.mono],
         },
      },
   },
   plugins: [],
}
export default config
