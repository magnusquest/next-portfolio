import { GraphQLClient } from "graphql-request";
import { getAllQuery, getProjectsQuery, getRecentProjectsQuery, getRecentQuery, getSingleProjectQuery, getSingleQuery } from "@/services/queries";
import { Content } from "@/models/types";

const graphcms = new GraphQLClient(process.env.GRAPHCMS_URL as string);

// Posts
export async function getPosts() {
      const res: { posts: Content[] } = await graphcms.request(getAllQuery("post"));
    return res.posts;
}

export async function getSinglePost(slug: string) {
      const res: { post: Content } = await graphcms.request(getSingleQuery("post", slug));
    return res.post;
}

export async function getRecentPosts() {
      const res: { posts: Content[] } = await graphcms.request(getRecentQuery("post"));
    return res.posts;
}


// Projects
export async function getProjects() {
      const res: { projects: Content[] } = await graphcms.request(getProjectsQuery);
    return res.projects;
}

export async function getSingleProject(slug: string) {
      const res: { project: Content } = await graphcms.request(getSingleProjectQuery(slug));
    return res.project;
}

export async function getRecentProjects() {
      const res: { projects: Content[] } = await graphcms.request(getRecentProjectsQuery);
    return res.projects;
}