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