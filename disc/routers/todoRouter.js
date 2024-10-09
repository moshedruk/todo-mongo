"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerTodo = express_1.default.Router();
const todocontroller_1 = require("../controllers/todocontroller");
routerTodo.post('/new', todocontroller_1.createNewTodo);
routerTodo.get('/todos', todocontroller_1.getTodos);
exports.default = routerTodo;
