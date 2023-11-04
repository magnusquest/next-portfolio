import Image from "next/image";
import { Content } from "@/models/types";
import { getSinglePost } from "@/services/graphqlClient";

export default async function SingleBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: Content = await getSinglePost(params.slug);
  return (
    <div className="flex flex-col items-center justify-center px-40 pt-20">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <Image
        className="rounded-lg pb-5"
        src={post.coverPhoto.url}
        alt="cover photo"
        width={800}
        height={400}
      />
      <h2 className="pb-20">{post.content.text.replace(/\\n/g, "")}</h2>
    </div>
  );
}
