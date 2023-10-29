import Hero from "@/components/Hero";

export default function IntroHero() {
  return (
    <Hero
      id="hero"
      src="/headshot-white-shirt.png"
      alt="Hero"
      width={400}
      height={400}
      header="Hi, I'm Martin."
      content="Full Stack Software Engineer by day ... and by night."
      content2="I also enjoy teaching robots how to do your job."
      left={true}
      links={[
        {
          image: "/linkedin.svg",
          link: "https://www.linkedin.com/in/martin-alejandro-cordero/",
          alt: "LinkedIn",
        },
        {
          image: "/github.svg",
          link: "https://github.com/magnusquest",
          alt: "GitHub",
        },
      ]}
    />
  );
}
