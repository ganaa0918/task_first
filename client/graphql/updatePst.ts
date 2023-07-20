import { gql } from "@apollo/client";
export const UPDATE_POST = gql`
mutation UpdatePost($updatePostId: Int!) {
  updatePost(id: $updatePostId) {
    title
    content
  }
}
`;