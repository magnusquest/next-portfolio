import Image from "next/image";
import { Post } from "@/models/types";
import { getPosts } from "@/services/graphqlClient";
import Card from "@/components/Card";

export default async function Blog() {
  const posts: Post[] = await getPosts();
  return (
    <div className="flex flex-col justify-center items-stretch px-40 pt-20">
      <div className="flex justify-center items-center">
        <h1>Blog</h1>
      </div>
      <div id="blog" className="grid grid-cols-3 gap-10 items-center">
        {posts.map((post: Post) => (
          <Card {...post} key={post.id} />
        ))}
        {/* {posts.map((post: Post) => (
          <Card {...post} key={post.id} />
        ))} */}
      </div>
    </div>
  );
}
