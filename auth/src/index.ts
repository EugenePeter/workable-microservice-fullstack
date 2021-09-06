import express from "express";
import { json } from "body-parser";
import dotenv from "dotenv";

import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";
import { natsWrapper } from "./nats-wrapper";

const { NATS_CLIENT_ID, NATS_CLUSTER_ID, NATS_URL } = process.env;

const app = express();
app.use(json());

dotenv.config();

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.use(errorHandler);

const URL: string = "http://nats-srv:4222";

app.listen(process.env.PORT, async () => {
  if (!NATS_CLIENT_ID) throw new Error("NATS_CLIENT_ID must be defined");
  if (!NATS_URL) throw new Error("NATS_URL must be defined");
  if (!NATS_CLUSTER_ID) throw new Error("NATS_CLUSTER_ID must be defined");

  try {
    await natsWrapper.connect("workable", "asdf", URL);
    natsWrapper.client.on("close", () => {
      console.log("NATS CONNECTION CLOSE");
      process.exit();
    });
    process.on("SIGINT", () => natsWrapper.client.close());
    process.on("SIGTERM", () => natsWrapper.client.close());

    console.log(`LISTENING ON PORT ${process.env.PORT}`);
  } catch (err) {}
});
