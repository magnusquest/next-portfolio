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
    <div className="flex justify-center items-stretch px-6 md:px-24 lg:px-32 xl:px-16 2xl:px-40 pt-32">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <Image
        className="rounded-lg pb-5"
        src={project.coverPhoto.url}
        alt="cover photo"
        width={400}
        height={400}
      />
      <div
        className="pb-20 text-container"
        dangerouslySetInnerHTML={{ __html: project.content.html }}
      ></div>
    </div>
  );
}
