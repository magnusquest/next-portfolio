import { getRecentProjects } from "@/services/graphqlClient";
import Link from "next/link";
import Card from "@/components/Card";
import { Content } from "@/models/types";

export default async function RecentProjects() {
  const projects = await getRecentProjects();
  return (
    <>
      <div id="projects">
        <div className="flex justify-between items-center">
          <h1>Recent Projects</h1>
          <Link href="/projects">
            <h2 className="text-blue-500 hover:text-blue-700">All Projects</h2>
          </Link>
        </div>
        <hr />
        <div className="sm:flex sm:justify-evenly pt-5">
          {projects.map((project: Content) => (
            <Card {...project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
}
