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
exports.GetUser = exports.createUser = void 0;
const todoModel_1 = __importDefault(require("../models/todoModel"));
const userModel_1 = __importDefault(require("../models/userModel"));
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // find  if user is already
        const existingUser = yield userModel_1.default.findOne({ name: user.name });
        if (existingUser) {
            if (existingUser.todos.includes(user.todos[0])) {
                throw new Error('Title already exists for this user');
            }
            existingUser.todos.push(user.todos[0]);
            yield todoModel_1.default.updateOne({ _id: user.todos[0] }, { $set: { status: true } });
            console.log(user.todos[0]);
            yield existingUser.save();
            return existingUser;
        }
        // find if mission is already
        // create new user and save it to the database  (we assume that user.name is unique)
        // i need to get mor informtion of newUser
        const { name, todos } = user;
        // find mission to create new status 
        const dbUser = new userModel_1.default({
            name,
            todos
        });
        yield todoModel_1.default.updateOne({ _id: user.todos[0] }, { $set: { status: true } });
        yield dbUser.save();
        return user;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.createUser = createUser;
const GetUser = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // find all users
        const users = yield userModel_1.default.find().populate("todos");
        return users;
    }
    catch (err) {
        console.log(err);
        throw err;
    }
});
exports.GetUser = GetUser;
