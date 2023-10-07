export default function Card(props: { title: string; content: string }) {
  return (
    <>
      <div className="card space-y-4">
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </>
  );
}
