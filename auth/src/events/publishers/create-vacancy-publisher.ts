import { Publisher, Subjects, CreateVacancyEvent } from "@workablepro/common";

export class CreateVacancyPublisher extends Publisher<CreateVacancyEvent> {
  subject: Subjects.VacancyCreated = Subjects.VacancyCreated;
}
