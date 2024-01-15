import Link  from "next/link";
import { client } from "../lib/sanity";
import { tag } from "../../../sanity/lib/tags";

async function getAllTags(){
    const query = `
    *[_type == "tag"]{
        name,
          slug,
          _id
      }
    `;
const tags = client.fetch(query)
return tags
}

export const revalidata = 60;

async function page() {
const tags:Tag[] = await getAllTags()


  return (
    <div>
        <h1 className="block  text-base text-center text-primary font-semibold tracking-wide uppercase">Tags</h1>
    <div>
      {tags?.length > 0 && tags.map((tag) => (
        <Link key={tag._id} href={`/tag/${tag.slug.current}`}>
        <div className="mb-2 p-2 text-sm lowercase bg-gray-300 dark:bg-gray-950 border dark:border-gray-900 hover:text-red-500 rounded">
            #{tag.name}
            </div>
        
        </Link>
        
        
      ))}  
    </div>
    </div>

    
  )
}

export default page