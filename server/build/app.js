"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_1 = require("./graphql/db");
var apollo_server_express_1 = require("apollo-server-express");
var schema_1 = require("./graphql/schema");
var resolvers_1 = require("./graphql/resolvers");
var index_1 = __importDefault(require("./routes/index"));
var port = 9999;
var app = express_1.default();
app.use(cors_1.default(), express_1.default.json());
var apolloServer = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.typeDefs, resolvers: resolvers_1.resolvers, context: { mysql: db_1.mysql } });
apolloServer.applyMiddleware({ app: app, path: '/api/graphql' });
app.use('/api', index_1.default);
app.listen(port, function () { return console.info("Server started on port " + port); });
