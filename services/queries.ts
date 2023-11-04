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
        text
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
        text
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
      text
    }
  }
}
`;