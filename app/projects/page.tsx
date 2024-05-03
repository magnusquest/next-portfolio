import Image from "next/image";
import { Content } from "@/models/types";
import { getProjects } from "@/services/graphqlClient";
import Card from "@/components/Card";

export default async function ProjectsPage() {
  const projects: Content[] = await getProjects();
  return (
    <div className="flex-col justify-center items-stretch px-6 md:px-24 lg:px-32 xl:px-16 2xl:px-40 pt-32">
      <div className="flex flex-col justify-center mb-5">
        <h1 className="mx-auto">Projects</h1>
      </div>
      <div className="flex justify-center">
        <div id="blog" className="grid grid-cols-2 gap-10 items-center">
          {projects.map((project: Content) => (
            <Card {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
