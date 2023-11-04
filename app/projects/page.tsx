import Image from "next/image";
import { Content } from "@/models/types";
import { getProjects } from "@/services/graphqlClient";
import ProjectHero from "@/components/ProjectHero";

export default async function ProjectsPage() {
  const projects: Content[] = await getProjects();
  return (
    <div className="flex flex-col justify-center items-stretch px-40 pt-20">
      <div className="flex flex-col justify-center mb-5">
        <h1 className="mx-auto">Projects</h1>
      </div>
      <div className="flex justify-center">
        <div id="blog" className="grid grid-cols-2 gap-10 items-center">
          {projects.map((project: Content) => (
            <ProjectHero {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
