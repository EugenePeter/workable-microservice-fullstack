import express from "express";
import dotenv from "dotenv";
import expressPlayground from "graphql-playground-middleware-express";
import { initializeApolloServer } from "./domains";

dotenv.config();

const app = express();
// app.get("/", expressPlayground({ endpoint: "/graphql" }));
app.get("/", (req, res) => {
  res.send("HELLO THEREssssssss");
});

app.get("/company-register", (req, res) => {
  res.send("REGISTER AS A COMPANY");
});

app.listen(process.env.PORT, () => {
  console.log(`HEY UPDATE is running on PORT: ${process.env.PORT}`);
  initializeApolloServer(app);
});
