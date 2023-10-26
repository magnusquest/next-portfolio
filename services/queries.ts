import { gql } from "graphql-request";

export const getPostsQuery = gql`
  query Posts {
    posts {
      id
      publishDate
      slug
      title
      coverPhoto {
        id
        url
      }
      author {
        id
        name
        avatar {
          id
          url
        }
      }
      content {
        text
      }
    }
  }
`;

export const getSinglePostQuery = gql`
query Post {
  post(where: {id: "clmm8aqlv1u3j0ak3vqe3ej7v"}){
      id
      publishDate
      slug
      title
      coverPhoto {
        id
        url
      }
      author {
        id
        name
        avatar {
          id
          url
        }
      }
      content {
        text
      }
    }
  }
`;