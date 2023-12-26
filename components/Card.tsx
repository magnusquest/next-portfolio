import { Content } from "@/models/types";
import Link from "next/link";

export default function Card(post: Content) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="xl:w-96 lg:w-64 md:w-48 sm:w-36 w-22 lg:h-64 h-32 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out m-2">
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
