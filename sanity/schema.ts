import { type SchemaTypeDefinition } from "sanity"
import content from "./schemas/content"
import author from "./schemas/author"
import category from "./schemas/category"
import post from "./schemas/post"

export const schema: { types: SchemaTypeDefinition[] } = {
   types: [category, content, post],
}
