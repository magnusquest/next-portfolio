import { Post } from "@/models/types";
import Card from "@/components/Card";
import Hero from "@/components/Hero";
import { getPosts } from "@/services/graphqlClient";
import IntroHero from "@/components/IntroHero";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="items-center p-24">
      <div id="blog" className="flex flex-col space-y-10">
        {posts.map((post: Post) => (
          <Card key={post.id} title={post.title} content={post.content.text} />
        ))}
      </div>
    </main>
  );
}
