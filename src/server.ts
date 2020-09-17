import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import express from "express";

const { PORT = 5000 } = process.env;
const app = express();
const server = createServer(app);
const apollo = new ApolloServer({ typeDefs, resolvers });
apollo.applyMiddleware({ app });

server.listen({ port: PORT }, () => {
  process.stdout.write(
    `Server ready at http://localhost/${PORT}${apollo.graphql.path}\n`
  );
});
