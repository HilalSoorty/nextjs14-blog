export default {
    name:"blog",
    type:"document",
    title:"Blog",
    fields:[
        {
            name:"title",
            type:"string",
            title:"Title sof blog article"

        },
        {
            name:"slug",
            type:"slug",
            title:"Slug of your blog article",
            options:{
                source:"title"
            }
        },
        {
            name:"TitleImage",
            type:"image",
            title:"Title Image",
        },
        {
            name:"smallDescription",
            type:"text",
            title:"small Description",
        },
        {
            name:"content",
            type:"array",
            title:"Content",
            of:[
                {
                    type:"block",
                }
            ]
        },
        {
            name:"tags",
            title:"Tags",
            type:"array",
            of: [{
                type:"reference",
                to:[{type:"tag"}]
            }],
        },
    ],
};