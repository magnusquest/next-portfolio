import { GraphQLClient, gql } from "graphql-request";
import { getPostsQuery } from "@/services/queries";
import { Post } from "@/models/types";
import BlogPostCard from "../../components/BlogPostCard";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL as string);

export default async function BlogPage() {
  const res: { posts: Post[] } = await graphcms.request(getPostsQuery);
  const { posts } = res;
  debugger;
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-12">
      {posts.map((post: Post) => (
        <BlogPostCard key={post.id} {...post} />
      ))}
    </main>
  );
}
