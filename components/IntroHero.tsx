import Hero from "@/components/Hero";

export default function IntroHero() {
  return (
    <Hero
      id="hero"
      src="/me-white-shirt.png"
      alt="Hero"
      width={400}
      height={400}
      header="Hi, I'm Martin."
      content="Full Stack Software Engineer by day..."
      content2="...and by night."
    />
  );
}
