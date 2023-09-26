import { Post } from "@/models/types";

export default function BlogPostCard(post: Post) {
  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.content.text}</p>
    </div>
  );
}
