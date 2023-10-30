import Image from "next/image";
import { Post } from "@/models/types";
import { getSinglePost } from "@/services/graphqlClient";

export default async function SingleBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: Post = await getSinglePost("test");
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="mb-8">
        <Image
          src={post.coverPhoto.url}
          alt="cover photo"
          width={800}
          height={400}
        />
      </div>
      <div className="prose max-w-none">
        {post.content.text}
        {params.slug}
      </div>
    </div>
  );
}
