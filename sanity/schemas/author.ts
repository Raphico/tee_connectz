import {
   ImageRule,
   SlugRule,
   StringRule,
   defineField,
   defineType,
} from "sanity"

const author = defineType({
   name: "author",
   title: "Authors",
   type: "document",
   fields: [
      defineField({
         name: "name",
         title: "Name",
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
         validation: (rule: SlugRule) => rule.required(),
      }),
      defineField({
         name: "image",
         title: "Image",
         type: "image",
         validation: (rule: ImageRule) => rule.required(),
      }),
      defineField({
         name: "socials",
         title: "Socials",
         type: "array",
         of: [
            {
               type: "object",
               fields: [
                  {
                     name: "platform",
                     title: "Platform",
                     type: "string",
                     options: {
                        list: [
                           { title: "Facebook", value: "facebook" },
                           { title: "Whatsapp", value: "whatsapp" },
                           { title: "Instagram", value: "instagram" },
                        ],
                        layout: "dropdown",
                     },
                  },
                  {
                     name: "url",
                     title: "URL",
                     type: "url",
                  },
               ],
            },
         ],
      }),
      defineField({
         name: "bio",
         title: "Bio",
         type: "array",
         of: [
            {
               title: "Block",
               type: "block",
               styles: [{ title: "Normal", value: "normal" }],
               lists: [],
            },
         ],
      }),
   ],
   preview: {
      select: {
         title: "name",
         media: "image",
      },
   },
})

export default author
