import {
   ImageRule,
   ReferenceRule,
   SlugRule,
   StringRule,
   TextRule,
   defineField,
   defineType,
} from "sanity"

const post = defineType({
   name: "post",
   title: "Posts",
   type: "document",
   fields: [
      defineField({
         name: "title",
         title: "Title",
         type: "string",
         validation: (rule: StringRule) => rule.required(),
      }),
      defineField({
         name: "description",
         title: "Description",
         type: "text",
      }),
      defineField({
         name: "slug",
         title: "Slug",
         type: "slug",
         options: {
            source: "title",
            maxLength: 200,
         },
         validation: (rule: SlugRule) => rule.required(),
      }),
      defineField({
         name: "publishedAt",
         title: "Published At",
         type: "datetime",
      }),
      defineField({
         name: "categories",
         title: "Categories",
         type: "array",
         of: [{ type: "reference", to: { type: "category" } }],
      }),
      defineField({
         name: "image",
         title: "Featured Image",
         type: "image",
         options: {
            hotspot: true,
         },
         validation: (rule: ImageRule) => rule.required(),
      }),
      defineField({
         name: "content",
         title: "Content",
         type: "content",
      }),
   ],
   initialValue: {
      publishedAt: new Date(),
   },
   preview: {
      select: {
         title: "title",
         publishedAt: "publishedAt",
         media: "image",
      },
      prepare: ({ title, publishedAt, media }) => ({
         title,
         subtitle: `Tee Connectz | ${new Date(
            publishedAt
         ).toLocaleDateString()}`,
         media,
      }),
   },
})

export default post
