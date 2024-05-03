import { gql } from "graphql-request";

export const getAllQuery = (model: string) => gql`
  query ${model} {
    ${model}s {
      id
      slug
      title
      coverPhoto {
        id
        url
      }
      content {
        html
      }
    }
  }
`;

export const getSingleQuery = (model: string, slug: string) => gql`
query ${model} {
  ${model}(where: {slug: "${slug}"}) {
      id
      slug
      title
      coverPhoto {
        id
        url
      }
      content {
        html
      }
    }
  }
`;

export const getRecentQuery = (model: string) => gql`
query Recent${model}s {
  ${model}s(orderBy: publishDate_DESC, first: 3) {
    id
    slug
    title
    coverPhoto {
      id
      url
    }
    content {
      html
    }
  }
}
`;

// Project Queries

export const getRecentProjectsQuery = gql`
query RecentProjects {
  projects(orderBy: publishDate_DESC, first: 3) {
    id
    slug
    title
    link
    coverPhoto {
      id
      url
    }
    content {
      html
    }
  }
}
`;

export const getProjectsQuery = gql`
query Projects {
  projects {
    id
    slug
    title
    link
    coverPhoto {
      id
      url
    }
    content {
      html
    }
  }
}
`;

export const getSingleProjectQuery = (slug: string) => gql`
query Project {
  project(where: {slug: "${slug}"}) {
    id
    slug
    title
    link
    coverPhoto {
      id
      url
    }
    content {
      html
    }
  }
}
`;