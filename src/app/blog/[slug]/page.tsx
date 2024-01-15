import { client, urlFor } from "@/app/lib/sanity"
import { PortableText } from "@portabletext/react"
import Image from "next/image";
import Link from "next/link"

export const revalidate = 30; // revalidate at most 30seconds.

async function getData(slug:string){
const query = `
*[_type == "blog" && slug.current == '${slug}']{
    "currentSlug": slug.current,
      title,
      content,
       TitleImage,
       tags[] ->{
        _id,
        slug,
        name,
      }
  }[0]
`
const data = await client.fetch(query)
return data

};



export default async function blogArticle({params}:{params:{slug:string}}) {
  const data:fullBlog = await getData(params.slug)

    return(
      <div>
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Hilal Soorty - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl ">
          {data.title}
          <div className="mt-4">
        <span className="text-sm text-gray-500">Tags:</span>
        <ul className="flex space-x-2">
          {data.tags.map((tag:any) => (
            <Link href={`/tag/${tag.slug.current}`} key={tag._id}>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {tag.name}
              </span>
            </Link>
          ))}
        </ul>
      </div>
        </span>
      </h1>
    
      <Image
        src={urlFor(data.TitleImage).url()}
        width={800}
        height={800}
        alt="TitleImage"
        priority
        className="rounded-lg mt-8 border"
      />
      <div className="mt-16 prose prose-red prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={data.content} />
      </div>
    
      
    </div>
    
    )
} 