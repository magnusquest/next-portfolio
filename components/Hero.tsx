import Image from "next/image";

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

  var imageLink = (link: any) => (
    <a href={link.link} key={link.alt} className="pr-4">
      <Image src={link.image} alt={link.alt} width={40} height={40} />
    </a>
  );

  return (
    <div className="flex items-center justify-center space-x-20 mb-20">
      {props.left ? image : null}
      <div>
        <h1>{props.header}</h1>
        {props.content}
        <br />
        {props.content2}
        <div className="flex pt-8">
          {!props.links
            ? null
            : props.links.map(
                (link: { image: string; link: string; alt: string }) =>
                  imageLink(link)
              )}
        </div>
      </div>
      {!props.left ? image : null}
    </div>
  );
}
