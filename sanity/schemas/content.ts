const content = {
   name: "content",
   title: "Contents",
   type: "array",
   of: [
      {
         title: "Block",
         type: "block",
         styles: [
            { title: "Normal", value: "normal" },
            { title: "H1", value: "h1" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "H4", value: "h4" },
            { title: "Quote", value: "blockquote" },
         ],
         marks: {
            decorators: [
               { title: "Strong", value: "strong" },
               { title: "Emphasis", value: "em" },
               { title: "Code", value: "code" },
            ],
            annotations: [
               {
                  title: "URL",
                  name: "link",
                  type: "object",
                  fields: [
                     {
                        title: "URL",
                        name: "href",
                        type: "url",
                     },
                  ],
               },
            ],
         },
      },
      {
         type: "image",
         options: { hotspot: true },
      },
   ],
}

export default content
