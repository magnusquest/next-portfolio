import Image from "next/image";
import { Content } from "@/models/types";
import { getSingleProject } from "@/services/graphqlClient";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project: Content = await getSingleProject(params.slug);
  return (
    <div className="flex flex-col items-center justify-center px-40 pt-20">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <Image
        className="rounded-lg pb-5"
        src={project.coverPhoto.url}
        alt="cover photo"
        width={400}
        height={400}
      />
      <h2 className="pb-20">{project.content.text.replace(/\\n/g, "")}</h2>
    </div>
  );
}
