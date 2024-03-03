import express from "express"; // yarn add express
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema";
import connectDB from "./schema/db";
const expressPlayground =
  require("graphql-playground-middleware-express").default;

const app = express();

connectDB

app.all("/graphql", createHandler({ schema }));
app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
