import nats from "node-nats-streaming";
import { CreateVacancyPublisher } from "./events";
// console.clear();
const client = nats.connect("workable", "abc", {
  url: "http://localhost:4222",
});

client.on("connect", async () => {
  console.log("PUBLISHER CONNECTED TO NATS");

  const publisher = new CreateVacancyPublisher(client);
  try {
    await publisher.publish({
      id: "123",
      title: "Software Engineer",
      salary: 2000,
    });
  } catch (error) {
    console.log("ERROR:", error);
  }
});
