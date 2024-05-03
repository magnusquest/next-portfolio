import { Content } from "@/models/types";
import Link from "next/link";

export default function Card(content: Content) {
  let isProject = content.link ? true : false;
  let link: string = isProject ? content.link ?? "" : `/blog/${content.slug}`;
  let title = isProject ? "" : content.title;

  return (
    <Link href={link}>
      <div
        className="xl:w-96 lg:w-64 md:w-48 sm:w-36 w-22 lg:h-64 h-32 rounded-lg overflow-hidden border-yellow-100 hover:border-8 hover:border-yellow-400 transition-all duration-200 ease-linear m-2"
        style={{
          backgroundImage: `url(${content.coverPhoto.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          className={`w-full h-full bg-black ${
            title === "" ? "bg-opacity-0" : "bg-opacity-50"
          } flex items-center justify-center`}
        >
          <div className="text-center px-2">
            <p className="text-white text-lg font-semibold">{title}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
