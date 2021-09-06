// import nats, { Message, Stan } from "node-nats-streaming";
// import { Subjects } from "./index";

// interface Event {
//   subject: Subjects;
//   data: any;
// }

// export abstract class Publisher<T extends Event> {
//   abstract subject: T["subject"];
//   private client: Stan;

//   constructor(client: Stan) {
//     this.client = client;
//   }

//   publish(data: T["data"]): Promise<void> {
//     return new Promise((resolve, reject) => {
//       this.client.publish(this.subject, JSON.stringify(data), (err) => {
//         if (err) reject(err);
//         console.log("EVENT PUBLISH TO SUBJECT:", this.subject);
//         resolve();
//       });
//     });
//   }
// }