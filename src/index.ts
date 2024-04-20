import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema";
import { authenticateJWT } from './middlewares/jwt.middleware';
import connectDB from "./schema/db";
import cors from 'cors'

const expressPlayground =
  require("graphql-playground-middleware-express").default;

const app = express();

connectDB

app.use(cors())

app.all("/graphql", authenticateJWT, createHandler({ schema }));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
