import { gql } from "@apollo/client";
export const GET_POSTS = gql`
query allPosts {
  posts {
    count
    data {
      id
      title
      content
    }
  }
}
`;