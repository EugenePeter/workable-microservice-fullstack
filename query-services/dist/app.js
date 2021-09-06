"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: "my-app-kafka",
    connectionTimeout: 10_000,
    authenticationTimeout: 10_000,
    brokers: ["kafka-service:9092"],
    // brokers: ["localhost:9092"],
    logLevel: kafkajs_1.logLevel.ERROR,
});
// console.log("KAFKA", JSON.stringify(kafka.producer));
const producer = kafka.producer();
const initProducer = async () => {
    await producer.connect();
    await producer.send({
        topic: "sending-test-topic",
        messages: [{ value: "Hello my lablab POY JHYNEE!" }],
    });
    await producer.disconnect();
};
initProducer();
const consumer = kafka.consumer({ groupId: "test-group" });
const initConsumer = async () => {
    await consumer.connect();
    await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                //@ts-ignore
                value: message.value.toString(),
            });
        },
    });
};
initConsumer();
console.log("HI IF YOU ARE SEEING THIS KAFKAaaaaa PRODUCER IS RUNNING!!");
// import express from "express";
// import dotenv from "dotenv";
// dotenv.config();
// const app = express();
// // app.get("/", expressPlayground({ endpoint: "/graphql" }));
// app.listen(4444, () => {
//   console.log(`appsss is running on PORT:4444`);
// });
// // const test = () => {
// //   console.log("IM RUNNING");
// // };
// // test();
//# sourceMappingURL=app.js.map