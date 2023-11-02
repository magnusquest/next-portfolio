import { GraphQLClient } from "graphql-request";
import { getPostsQuery, getRecentPostsQuery, getSinglePostQuery } from "@/services/queries";
import { Post } from "@/models/types";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL as string);

export async function getPosts() {
      const res: { posts: Post[] } = await graphcms.request(getPostsQuery);
    return res.posts;
}

export async function getSinglePost(slug: string) {
      const res: { post: Post } = await graphcms.request(getSinglePostQuery(slug));
    return res.post;
}

export async function getRecentPosts() {
      const res: { posts: Post[] } = await graphcms.request(getRecentPostsQuery);
    return res.posts;
}