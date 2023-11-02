import { Post } from "@/models/types";
import Link from "next/link";

export default function Card(post: Post) {
  return (
    <Link className="w-min" href={`/blog/${post.slug}`}>
      <div className="w-64 h-32 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out">
        <div
          className="w-full h-full bg-cover bg-center bg-fixed transform hover:scale-110 transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: `url(${post.coverPhoto.url})`,
          }}
        >
          <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center px-2">
              <p className="text-white text-lg font-semibold">{post.title}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
