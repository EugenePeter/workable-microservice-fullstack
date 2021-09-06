"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var domains_1 = require("./domains");
dotenv_1.default.config();
var app = express_1.default();
// app.get("/", expressPlayground({ endpoint: "/graphql" }));
app.get("/", function (req, res) {
    res.send("HELLO THEREssssssss");
});
app.get("/company-register", function (req, res) {
    res.send("REGISTER AS A COMPANY");
});
app.listen(process.env.PORT, function () {
    console.log("HEY UPDATE is running on PORT: " + process.env.PORT);
    domains_1.initializeApolloServer(app);
});
//# sourceMappingURL=app.js.map