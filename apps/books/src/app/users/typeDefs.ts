import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`
  type Query {
    getUser(id: Int!): User
  }

  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;
