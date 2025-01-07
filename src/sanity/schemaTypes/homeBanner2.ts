import { defineField, defineType } from "sanity";

export default defineType({
    type: "document",
    name: "homeBanner2",
    title: "Home Banner 2",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "text",
            title: "Text",
            type: "string",
            description: "Text to display over image"
        }),
        defineField({
            name: "body",
            title: "Body text",
            type: "array",
            of: [{ type: "block" }]
          }),
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            description: "Home Banner 2",
            validation: (rule) => rule.required(),
            options: {
                hotspot: true,
            },
            preview: {
                select: {
                    imageUrl: "asset.url",
                    title: "caption",
                },
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "image",
        },
    },
});