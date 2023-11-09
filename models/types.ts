export interface Content {
  id: string;
  title: string;
  content: {
    html: string;
  }
  publishDate?: string;
  slug?: string;
  coverPhoto: {
    id: string;
    url: string;
  };
  // author?: {
  //   id: string;
  //   name: string;
  //   avatar: {
  //     id: string;
  //     url: string;
  //   };
  // };
}
