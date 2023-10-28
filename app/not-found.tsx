import Link from "next/link"

export default function Custom404() {
   return (
      <div className="flex items-center justify-center flex-col gap-2 min-h-screen">
         <h1 className="heading1">404 Not Found</h1>
         <p className="body-text text-mute">
            The page your looking for does not exist
         </p>
         <Link href="/" className="btn bg-accent text-background px-4 py-2">
            Take me home
         </Link>
      </div>
   )
}
