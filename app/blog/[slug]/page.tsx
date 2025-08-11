import Image from "next/image";
import { Content } from "@/models/types";
import { getSinglePost } from "@/services/graphqlClient";
import { Metadata } from "next";

export async function generateMetadata({
	params
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const post = await getSinglePost(params.slug);
	return {
		title: post.title,
		description: post.content.html.slice(0, 150)
	};
}

export default async function SingleBlogPost({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post: Content = await getSinglePost(slug);
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
