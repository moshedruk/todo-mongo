"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const todoRouter_1 = __importDefault(require("./routers/todoRouter"));
const userRouter_1 = __importDefault(require("./routers/userRouter"));
const dbConfig_1 = require("./config/dbConfig");
// const { connectToMongo } = require('./config/dbConfig');
(0, dbConfig_1.connectToMongo)();
const port = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/user', userRouter_1.default);
app.use('/todo', todoRouter_1.default);
// Server running message
app.listen(port, () => console.log(' listening on port ' + port));
