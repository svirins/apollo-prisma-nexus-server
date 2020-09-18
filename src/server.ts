import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import { createContext } from "./context";

import express from "express";

import { schema } from "./schema";
import cors from 'cors';

const { PORT = 5000 } = process.env;
const app = express();
app.use(cors());

const server = createServer(app);
const apollo = new ApolloServer({ schema, context: createContext });

apollo.applyMiddleware({ app });

server.listen({ port: PORT }, () => {
  process.stdout.write(
    `🚀 Server ready at http://localhost:${PORT}${apollo.graphqlPath}\n`
  );
});
