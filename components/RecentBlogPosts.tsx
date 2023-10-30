import { Post } from "@/models/types";
import Card from "./Card";
import { getPosts } from "@/services/graphqlClient";
import Link from "next/link";

export default async function RecentBlogPosts() {
  const posts = await getPosts();

  return (
    <div className={"pb-10"}>
      <div className="flex justify-between items-center">
        <h1>Recent Blog Posts</h1>
        <Link href="/blog">
          <h2 className="text-blue-500 hover:text-blue-700">All Blog Posts</h2>
        </Link>
      </div>
      <hr />
      <div id="blog" className="flex justify-evenly pt-5">
        {posts.map((post: Post) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
