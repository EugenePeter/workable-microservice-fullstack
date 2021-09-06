import { Subjects } from "./subjects";

export interface CreateVacancyEvent {
  subject: Subjects.VacancyCreated;
  data: {
    id: string;
    title: string;
    salary: number;
  };
}
