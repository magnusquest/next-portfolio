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
}

export default function Hero(props: any) {
  return (
    <main id="hero">
      <div className="flex items-center space-x-20 w-full p-10 pb-30">
        <Image
          src={props.src}
          alt={props.alt}
          width={props.width}
          height={props.height}
        />
        <div>
          {props.header}
          <br />
          {props.content}
          <br />
          {props.content2}
        </div>
      </div>
    </main>
  );
}
