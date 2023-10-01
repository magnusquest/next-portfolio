import Image from "next/image";
import { Post } from "@/models/types";
import BlogPostCard from "@/components/BlogPostCard";
import Hero from "@/components/Hero";
import { getPosts } from "@/services/graphqlClient";

export default async function Home() {
  const posts = await getPosts();
  debugger;
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-12">
      <div id="hero">
        <Hero />
      </div>
      <div id="blog">
        {posts.map((post: Post) => (
          <BlogPostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
