import { Post } from "@/models/types";
import Card from "./Card";
import { getPosts } from "@/services/graphqlClient";

export default async function BlogPosts() {
  const posts = await getPosts();

  return (
    <>
      <h1>Recent Blog Posts</h1>
      <hr />
      <div id="blog" className="flex justify-evenly pt-5">
        {posts.map((post: Post) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </>
  );
}
