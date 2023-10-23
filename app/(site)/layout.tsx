import Navbar from "@/components/navbar"

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Navbar />
         <main className="py-12 sm:py-16 lg:py-20">{children}</main>
      </>
   )
}

export default SiteLayout
