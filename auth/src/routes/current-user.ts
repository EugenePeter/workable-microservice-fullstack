import express from "express";

import { CreateVacancyPublisher } from "../events/publishers/create-vacancy-publisher";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.get("/api/users/currentuser", async (req, res) => {
  await new CreateVacancyPublisher(natsWrapper.client).publish({
    id: "1234312",
    title: "Software Architect",
    salary: 9000,
  });
  res.send("Hi there MY LABLAB MY POY!");
});

export { router as currentUserRouter };
