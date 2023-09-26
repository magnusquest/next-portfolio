import { GraphQLClient, gql } from "graphql-request";
import { getPostsQuery } from "@/services/queries";
import { Post } from "@/models/types";
import BlogPostCard from "./BlogPostCard";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL as string);

export default async function BlogPage() {
  const res: { posts: Post[] } = await graphcms.request(getPostsQuery);
  const { posts } = res;
  debugger;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        Hello World
      </div>
      {posts.map((post: Post) => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </main>
  );
}
