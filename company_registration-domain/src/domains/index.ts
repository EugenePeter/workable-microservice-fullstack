import { ApolloServer } from "apollo-server-express";
import { gql } from "apollo-server-express";
import { artist_resolvers } from "./artwork/resolvers";
import { artist_type_Defs } from "./artwork/typeDefs";
import { getAllPhotos } from "../utils/unsplash.api";

const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
`;

export const initializeApolloServer = async (app: any) => {
  console.log("INITIALIZING APOLLO SERVER TEST");
  const apolloServer = new ApolloServer({
    typeDefs: [defaultTypeDefs, artist_type_Defs],
    resolvers: [artist_resolvers],
    context: {
      all_photos: "test",
    },
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app });
};
