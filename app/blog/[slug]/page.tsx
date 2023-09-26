export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <h1>Hello Blog Post : {params.slug} </h1>;
}
