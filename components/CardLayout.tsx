import Image from "next/image";
import BlogPostCard from "./BlogPostCard";

const testPost = {
  title: "Test Post",
  content: {
    text: "Hello World",
  },
};

export default function CardLayout() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello CardLayout.
      <BlogPostCard id="123" {...testPost} />
    </main>
  );
}
