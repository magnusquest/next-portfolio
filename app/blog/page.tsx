import { Content } from "@/models/types";
import { getPosts } from "@/services/graphqlClient";
import Card from "@/components/Card";

export default async function BlogPage() {
  const posts: Content[] = await getPosts();
  return (
    <div className="flex flex-col justify-center items-stretch px-40 pt-20">
      <div className="flex flex-col justify-center mb-5">
        <h1 className="mx-auto">Blog</h1>
      </div>
      <div className="flex justify-center">
        <div id="blog" className="grid grid-cols-3 gap-10 items-center">
          {posts.map((post: Content) => (
            <Card {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
