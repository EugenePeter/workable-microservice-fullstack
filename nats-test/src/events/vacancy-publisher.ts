// // import { Publisher } from "./base-publisher";
// import { CreateVacancyEvent } from "./create-vacancy-event";
// import { Subjects } from "./subjects";

import { Publisher, Subjects, CreateVacancyEvent } from "@workablepro/common";

export class CreateVacancyPublisher extends Publisher<CreateVacancyEvent> {
  subject: Subjects.VacancyCreated = Subjects.VacancyCreated;
}
