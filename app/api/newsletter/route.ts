import { z } from "zod"
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
   apiKey: process.env.MAILCHIMP_API_KEY,
   server: process.env.MAILCHIMP_API_SERVER_KEY,
})

export const POST = async (req: Request) => {
   const { email } = z
      .object({
         email: z.string().email(),
      })
      .parse(await req.json())

   try {
      await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID!, {
         email_address: email,
         status: "subscribed",
      })

      return new Response(null, { status: 200 })
   } catch (error) {
      if (error instanceof z.ZodError) {
         return new Response(error.message, { status: 422 })
      }
      if (error instanceof Error) {
         return new Response(error.message, { status: 500 })
      }

      return new Response("Something went wrong", { status: 500 })
   }
}
