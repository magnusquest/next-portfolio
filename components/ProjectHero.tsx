import Hero from "@/components/Hero";
import Link from "next/link";

export default function ProjectHero(props: any) {
  return (
    <Link href={`/projects/${props.slug}`}>
      <Hero
        id={props.id}
        src={props.coverPhoto.url}
        alt={props.title}
        width={200}
        height={200}
        header={props.title}
        content={props.content.html.replace(/\\n/g, "")}
        left={false}
      />
    </Link>
  );
}
