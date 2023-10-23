import Link from "next/link"
import { Stack, Card } from "@sanity/ui"
import { LayoutProps } from "sanity"

const StudioNav = (props: LayoutProps) => {
   return (
      <Stack>
         <Card padding={3} tone="default">
            <Link href="/" className="underline">
               Go back to website
            </Link>
         </Card>
         <>{props.renderDefault(props)}</>
      </Stack>
   )
}

export default StudioNav
