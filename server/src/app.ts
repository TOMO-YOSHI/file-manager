import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import { mysql } from './graphql/db';
import { ApolloServer } from 'apollo-server-express';

import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';

const port = 9999;
const app = express();
app.use(cors(), express.json());

const apolloServer = new ApolloServer({typeDefs, resolvers, context: { mysql } });
apolloServer.applyMiddleware({app, path: '/api/graphql'})

app.listen(port, () => console.info(`Server started on port ${port}`));