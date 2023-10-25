import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Toaster } from "sonner"

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Navbar />
         <main className="py-12 sm:py-16 lg:py-20">{children}</main>
         <Footer />
         <Toaster position="top-center" />
      </>
   )
}

export default SiteLayout
