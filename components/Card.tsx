import Image from "next/image";
import { Post } from "@/models/types";

export default function Card(post: Post) {
  return (
    <div className="card space-y-4 hover:bg-slate-900 w-full">
      <h2 className="card-title">{post.title}</h2>
      <p className="card-description">{post.content.text}</p>
      {/* <Image src={post.coverPhoto.url} alt="cover photo" /> */}
    </div>
  );
}
