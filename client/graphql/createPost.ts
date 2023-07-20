import { gql } from "@apollo/client";

export const CREATE_POST = gql`
mutation CreatePost($data: PostCreateInput!, $authorEmail: String!) {
    createPost(data: $data, authorEmail: $authorEmail) {
      content
      createdAt
      id
      title
      updatedAt
    },
  }
`;
