import Hero from "@/components/Hero";

export default function DevelupHero() {
  return (
    <Hero
      id="develup"
      src="/develup_logo.png"
      alt="Develup"
      width={200}
      height={200}
      header="Develup"
      content="The decentralized tech community."
      content2="Coming soon."
      left={false}
    />
  );
}
