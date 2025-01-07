import { defineField, defineType } from "sanity";

export default defineType({
    type: "document",
    name: "homeBanner1",
    title: "Home Banner 1",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        // defineField({
        //     name: "image",
        //     title: "Image",
        //     type: "image",
        //     description: "Home Banner 1",
        //     validation: (rule) => rule.required(),
        //     options: {
        //         hotspot: true,
        //     },
        //     // Might not need this:
        //     preview: {
        //         select: {
        //             imageUrl: "asset.url",
        //             title: "caption",
        //         },
        //     },
        //     // End: Might not need this
        // }),
        defineField({
            name: "desktopImage",
            title: "Desktop Image",
            type: "image",
            description: "Desktop version of the banner",
            validation: (rule) => rule.required(),
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: "mobileImage",
            title: "Mobile Image",
            type: "image",
            description: "Mobile version of the banner",
            validation: (rule) => rule.required(),
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "desktopImage", // Use desktopImage for preview by default
        },
    },
});

