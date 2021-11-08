import { ApolloServer } from 'apollo-server-lambda';

import { resolvers } from './app/users/resolvers';
import { typeDefs } from './app/users/typeDefs';

const server = new ApolloServer({ typeDefs, resolvers });

export const graphqlHandler = server.createHandler();
