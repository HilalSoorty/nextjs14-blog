import { client, urlFor } from "@/app/lib/sanity"
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image"
import Link from "next/link";

// import blog from "../../../../sanity/lib/blog";
// import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function getPostsByTag(tag:string) {
const query = `
*[_type == "blog" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
    title,
      smallDescription,
      "currentSlug":slug.current,
      TitleImage,
      tags[] ->{
        _id,
        slug,
        name,
      }
}
`

const blogs = await client.fetch(query);
return blogs;

}

interface Params{
    params: {
        slug:string
    }
}

const page = async ({params}:Params) => {
    const posts:Array<Post> = await getPostsByTag(params.slug)
  
    return (
        <>
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:text-red-600">
            {`${params?.slug}`}  
        </div>
        <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:text-red-600">
<Link href={`/tag`}>#tags</Link>  
        </div>
    <div className="grid  grid-cols-1  md:grid-cols-2 mt-5 gap-5">
    <div className="flex gap-5">
       {posts?.length > 0 && posts.map((post) => (
    <Card key={post._id}>
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
    </div>
    </>
  )
}

export default page