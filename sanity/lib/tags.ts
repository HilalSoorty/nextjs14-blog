import { defineType } from "sanity";

export const tag = defineType({
    name:"tag",
    title:"tag",
    type:"document",
    fields:[
        {
            name:"name",
            title:"Tag Name",
            type:"string"
        },
        {
            name:"slug",
            title:"Slug",
            type:"slug",
            options:{
                source:"name"
            }
        }
    ]
})