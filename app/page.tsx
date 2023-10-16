import { Post } from "@/models/types";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { getPosts } from "@/services/graphqlClient";
import IntroHero from "@/components/IntroHero";
import DevelupHero from "@/components/DevelupHero";
import BlogPosts from "@/components/BlogPosts";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex-col items-center px-40 pt-40">
      <IntroHero />
      <BlogPosts />
      <DevelupHero />
    </main>
  );
}
