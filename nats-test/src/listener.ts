import nats from "node-nats-streaming";
import { CreateVacancyListener } from "./events";
import { randomBytes } from "crypto";

const client_id = `vacancy_listener-${randomBytes(4).toString("hex")}`;
const client = nats.connect("workable", client_id, {
  url: "http://localhost:4222",
});

client.on("connect", () => {
  console.log("LISTENER CONNECTED TO NATS");

  client.on("close", () => {
    console.log("NATS connection closed");
    process.exit();
  });

  new CreateVacancyListener(client).listen();
});

process.on("SIGINT", () => client.close());
process.on("SIGTERM", () => client.close());
