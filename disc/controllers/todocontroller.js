"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createNewTodo = void 0;
const todoService_1 = require("../service/todoService");
// Function for creating a new user in the database
const createNewTodo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = yield (0, todoService_1.createTodo)(req.body);
        res.status(201).json({ todo: newTodo, msg: 'User created successfully' });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
});
exports.createNewTodo = createNewTodo;
const getTodos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield (0, todoService_1.getallTodos)();
        res.status(200).json({ allTodos, msg: 'getting todo successfully' });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
});
exports.getTodos = getTodos;
