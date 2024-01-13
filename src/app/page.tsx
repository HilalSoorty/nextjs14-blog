import { Card, CardContent } from "@/components/ui/card";
import { client, urlFor } from "./lib/sanity"
import Image from "next/image"
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30seconds.

async function getData () {
  const querry = `*[_type == "blog"] | order(_createdAt desc){
    title,
      smallDescription,
      "currentSlug":slug.current,
      TitleImage,
      tags[] ->{
        _id,
        slug,
        name,
      }
  }`;
  const data = await client.fetch(querry)
  return data;
  console.log(data)
}

export default async function Home() {
  const data:simpleBlogCard[] = await getData()
  console.log(data);
  
  return (
  <div className="grid  grid-cols-1  md:grid-cols-2 mt-5 gap-5">
{
  data.map((post,idx) => (
    <Card key={idx}>
     <Image src={urlFor(post.TitleImage).url()}
      alt="image"
       width={500}
        height={500}
        className="rounded-t-lg h-[200px] object-cover"
        />
        <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">{post.smallDescription}</p>
        </CardContent>
        {/* tags */}
        <div className="mb-2">
  {post?.tags?.map((tag:any) => (
    <span key={tag?._id} className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border border-gray-600 dark:border-gray-900">#{tag?.name}</span>
  ))}
</div>

        <Button asChild className="w-full ">
          <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
        </Button>
    </Card>
  ))}
  </div>
  )
}
