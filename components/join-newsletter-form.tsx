"use client"

import Image from "next/image"

import { toast } from "sonner"
import { useState } from "react"

const JoinNewsletterForm = () => {
   const [isLoading, setIsLoading] = useState(false)
   const [email, setEmail] = useState("")

   const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault()

      setIsLoading(true)

      const response = await fetch("/api/newsletter", {
         body: JSON.stringify({ email }),
         headers: { "Content-Type": "application/json" },
         method: "POST",
      })

      setIsLoading(false)

      if (!response.ok) {
         switch (response.status) {
            case 422:
               toast.error("Invalid input.")
               break
            case 500:
               toast.error("Something went wrong. Please try again later.")
               break
            default:
               toast.error("Something went wrong. Please try again later.")
         }
         return
      }

      toast.success("Successfully added to the newsletter!")
      setEmail("")
   }

   return (
      <div className="w-full max-w-lg">
         <form
            className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end "
            onSubmit={onSubmit}
         >
            <div className="flex-1">
               <label htmlFor="email" className="sr-only">
                  Email
               </label>
               <input
                  placeholder="example@gmail.com"
                  className="flex w-full rounded-md border border-border px-3 py-2 focus-visible:outline-none focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
               />
            </div>
            <button
               aria-label="Join newsletter"
               className="btn px-4 py-2 bg-accent text-background shadow-lg"
               disabled={isLoading}
            >
               {isLoading ? "Subscribing..." : "Subscribe"}
            </button>
         </form>
      </div>
   )
}

export default JoinNewsletterForm
