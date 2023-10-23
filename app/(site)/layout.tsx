import Navbar from "@/components/navbar"

const SiteLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <>
         <Navbar />
         <main className="py-10">{children}</main>
      </>
   )
}

export default SiteLayout
