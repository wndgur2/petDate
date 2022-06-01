import { gql } from "apollo-server";

export default gql`
  type Mutation {
    uploadPost(content: String!, time: String!, location: String!): MutationResponse!
  }
`;