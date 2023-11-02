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

export const getSinglePostQuery = (slug: string) => gql`
query Post {
  post(where: {slug: "${slug}"}) {
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

export const getRecentPostsQuery = gql`
query RecentPosts {
  posts(orderBy: publishDate_DESC, first: 3) {
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