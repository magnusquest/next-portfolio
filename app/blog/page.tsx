import Image from "next/image";
import { Post } from "@/models/types";
import { getPosts } from "@/services/graphqlClient";

export default async function Blog({ params }: { params: { slug: string } }) {
  const posts: Post[] = await getPosts();
  return <div className="container mx-auto px-4 py-20">Hi from all posts</div>;
}
