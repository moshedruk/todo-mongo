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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getallTodos = exports.createTodo = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const createTodo = (todo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // i need to get mor informtion of newtodo
        const { title } = todo;
        const dbTodo = new todoModel_1.default({
            title,
        });
        yield dbTodo.save();
        return todo;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.createTodo = createTodo;
const getallTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // i need to get mor informtion of newtodo
        const todos = yield todoModel_1.default.find();
        console.log(todos);
        return todos;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.getallTodos = getallTodos;
