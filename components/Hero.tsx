import Image from "next/image";

interface props {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  header: string;
  content: string;
  content2?: string;
  left: boolean;
}

export default function Hero(props: any) {
  var image = (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="object-cover rounded-full"
    />
  );

  return (
    <main id="hero">
      <div className="flex items-center justify-center space-x-20 w-full pb-40">
        {props.left ? image : null}
        <div>
          <h1>{props.header}</h1>
          {props.content}
          <br />
          {props.content2}
        </div>
        {!props.left ? image : null}
      </div>
    </main>
  );
}
