import { Post } from "@/models/types";
import Card from "./Card";
import { getPosts } from "@/services/graphqlClient";

export default async function BlogPosts() {
  const posts = await getPosts();

  return (
    <>
      <div id="blog" className="flex justify-evenly pt-20">
        {posts.map((post: Post) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </>
  );
}
