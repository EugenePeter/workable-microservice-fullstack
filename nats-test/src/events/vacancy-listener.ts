import { Message } from "node-nats-streaming";
// import { Listener } from "./base-listener";
// import { CreateVacancyEvent } from "./create-vacancy-event";
// import { Subjects } from "./subjects";

import { Listener, CreateVacancyEvent, Subjects } from "@workablepro/common";

export class CreateVacancyListener extends Listener<CreateVacancyEvent> {
  readonly subject: Subjects.VacancyCreated = Subjects.VacancyCreated;
  queueGroupName = "vacancy-service";

  onMessage(data: CreateVacancyEvent["data"], msg: Message) {
    // console.log(
    //   `EVENT DATA:", ${JSON.stringify(
    //     data
    //   )}, EVENT number: ${msg.getSequence()}`
    // );
    const log_data = {
      ...data,
      event_number: msg.getSequence(),
    };
    console.table(log_data);
    msg.ack();
  }
}
