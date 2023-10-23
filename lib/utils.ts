import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

export function absoluteUrl(path: string) {
   return `${process.env.NEXT_PUBLIC_APP_URL}${path}`
}

export function formatDate(dateString: string) {
   const date = new Date(dateString)
   return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   })
}
