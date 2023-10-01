import { GraphQLClient, gql } from "graphql-request";
import { getPostsQuery } from "@/services/queries";
import { Post } from "@/models/types";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL as string);

export async function getPosts() {
      const res: { posts: Post[] } = await graphcms.request(getPostsQuery);
    return res.posts;
}