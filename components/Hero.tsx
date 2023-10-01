import Image from "next/image";

const testPost = {
  title: "Test Post",
  content: {
    text: "Hello World",
  },
};

export default function Hero() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello Hero.
    </main>
  );
}
