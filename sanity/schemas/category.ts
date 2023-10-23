import { SlugRule, StringRule, TextRule, defineField, defineType } from "sanity"

const category = defineType({
   name: "category",
   title: "Categories",
   type: "document",
   fields: [
      defineField({
         name: "name",
         title: "name",
         type: "string",
         validation: (rule: StringRule) => rule.required(),
      }),
      defineField({
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "name",
            maxLength: 96,
         },
      }),
      defineField({
         name: "description",
         title: "Description",
         type: "text",
         validation: (rule: TextRule) => rule.required(),
      }),
   ],
})

export default category
