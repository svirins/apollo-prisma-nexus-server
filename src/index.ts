require('dotenv').config()

import { GraphQLServer } from 'nexus-plugin-prisma';
import { PrismaClient } from 'nexus-plugin-prisma';
import { makeSchema } from 'nexus-plugin-prisma';
import { nexusPrismaPlugin } from 'nexus-prisma';
import { Query } from './queries';
import { Mutation } from './mutations';
import { schema } from './schema';


const prisma = new PrismaClient();

// Create schema with Nexus

export const schema = makeSchema({
    shouldGenerateArtifacts: true,
    types: [
        Query,
        Mutation,
    ],
    plugins: [
        nexusPrismaPlugin(),
    ],
    // Tells nexus where to look for types when generating the graphql schema
    typegenAutoConfig: {
        sources: [
            {
                source: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
    // Tells nexus where to output the generated graphql schema and types
    outputs: {
        schema: path.join(__dirname, '../generated/schema.graphql'),
        typegen: path.join(__dirname, '../generated/nexus.ts'),
    },
});


const server = new GraphQLServer({
    schema,
    // Adds prisma to the graphql context for use inside of mutation and query resolvers
    context: {
        prisma,
    }
});