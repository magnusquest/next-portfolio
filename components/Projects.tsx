import DevelupHero from "@/components/DevelupHero";

export default async function Projects() {
  return (
    <div className={"pb-10"}>
      <h1>Projects</h1>
      <hr />
      <div id="blog" className="flex-col justify-evenly pt-5">
        <DevelupHero />
      </div>
    </div>
  );
}
