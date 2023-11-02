import { getPosts } from "@/services/graphqlClient";
import IntroHero from "@/components/IntroHero";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import RecentProjects from "@/components/RecentProjects";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex-col items-center px-40 pt-40">
      <IntroHero />
      <RecentBlogPosts />
      <RecentProjects />
    </main>
  );
}
