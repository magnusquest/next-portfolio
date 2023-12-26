import Image from "next/image";

export default function Hero(props: any) {
  var image = (
    <Image
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      className="object-cover rounded-full lg:w-3/5 w-3/4 md:w-2/3 m-auto"
    />
  );

  var imageLink = (link: any) => (
    <a href={link.link} key={link.alt} className="pr-4 w-1/10 md:w-40px">
      <Image src={link.image} alt={link.alt} width={40} height={40} />
    </a>
  );

  return (
    <div className="w-full lg:flex justify-center mb-6 mt-6 px-6 pt-4 sm:space-x-10">
      {props.left ? image : null}
      <div className="flex-col lg:pt-32 sm:pt-8 pt-2">
        <h1>{props.header}</h1>
        <div className="flex lg:flex-col justify-between items-center">
          <div className="flex-col">
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: props.content }}
            ></div>
            <div
              className="text-container"
              dangerouslySetInnerHTML={{ __html: props.content2 }}
            ></div>
          </div>
          <div className="flex sm:pt-4 ml-auto lg:w-full">
            {!props.links
              ? null
              : props.links.map(
                  (link: { image: string; link: string; alt: string }) =>
                    imageLink(link)
                )}
          </div>
        </div>
      </div>
      {!props.left ? image : null}
    </div>
  );
}
