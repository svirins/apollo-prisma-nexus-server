import * as path from "path";
// switch ./models to ./types
import * as types from "./models";
import { makeSchema } from "@nexus/schema";
import { nexusSchemaPrisma } from "nexus-plugin-prisma/schema";

export const schema = makeSchema({
  types,
  plugins: [nexusSchemaPrisma()],
  outputs: {
    schema: path.join(__dirname, "./../schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});
