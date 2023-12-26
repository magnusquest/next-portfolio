import { Content } from "@/models/types";
import Card from "./Card";
import { getRecentPosts } from "@/services/graphqlClient";
import Link from "next/link";

export default async function RecentBlogPosts() {
  const posts = await getRecentPosts();

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Recent Blog Posts</h1>
        <Link href="/blog">
          <h2 className="text-blue-500 hover:text-blue-700">All Blog Posts</h2>
        </Link>
      </div>
      <hr />
      <div id="blog" className="sm:flex sm:justify-evenly pt-5">
        {posts.map((post: Content) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
