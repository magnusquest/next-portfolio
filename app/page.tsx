import { getPosts } from "@/services/graphqlClient";
import IntroHero from "@/components/IntroHero";
import RecentBlogPosts from "@/components/RecentBlogPosts";
import RecentProjects from "@/components/RecentProjects";
import Contact from "@/components/Contact";

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex-col items-center md:px-24 md:pt-24 sm:px-20 sm:pt-20 px-10 pt-10 space-y-10">
      <IntroHero />
      <RecentBlogPosts />
      <RecentProjects />
      {/* <Contact /> */}
    </main>
  );
}
