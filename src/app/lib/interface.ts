interface simpleBlogCard{
    title:string,
    smallDescription:string,
    currentSlug:string,
    TitleImage:any
    tags:any
    _id:any
    slug:any
    name:string
};

interface fullBlog{
    currentSlug:string,
    title:string,
    content:any,
    TitleImage:any,
    tags:any
    name:string
};

interface Tag{
    name:string,
    slug: {current:string},
    _id: string;
}

interface Post {
    title: string
    slug: { current: string };
    publishedAt: string;
    excerpt: string;
    body: any;
    tags: Array<Tag>;
    _id: string;
    TitleImage:any,
    currentSlug:string,
    smallDescription:string,
  }