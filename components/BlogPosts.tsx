import Card from "./Card";

const testPost = {
  title: "Test Post",
  content: {
    text: "Hello World",
  },
};

export default function BlogPosts() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Hello CardLayout.
      <Card title={testPost.title} content={testPost.content.text} />
    </main>
  );
}
