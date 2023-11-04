import ContentHero from "@/components/ProjectHero";
import { getRecentProjects } from "@/services/graphqlClient";

export default async function RecentProjects() {
  const projects = await getRecentProjects();
  return (
    <div className={"pb-10"}>
      <h1>Recent Projects</h1>
      <hr />
      <div id="blog" className="flex-col justify-evenly pt-5">
        {/* do a mapping */}
        <ContentHero {...projects[0]} />
      </div>
    </div>
  );
}
