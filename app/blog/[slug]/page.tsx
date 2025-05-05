import Image from "next/image";
import { Content } from "@/models/types";
import { getSinglePost } from "@/services/graphqlClient";

export default async function SingleBlogPost({
	params
}: {
	params: { slug: string };
}) {
	const post: Content = await getSinglePost(params.slug);
	return (
		<div className="flex flex-col items-center justify-center px-6 lg:px-40 py-20 md:mt-12">
			<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
			<Image
				className="rounded-lg pb-5"
				src={post.coverPhoto.url}
				alt="cover photo"
				width={800}
				height={400}
			/>
			<div
				className="xl:px-28 pt-8 text-justify text-container"
				dangerouslySetInnerHTML={{ __html: post.content.html }}></div>
		</div>
	);
}
