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
exports.getUsers = exports.createNewUser = void 0;
const userService_1 = require("../service/userService");
// Function for creating a new user in the database
const createNewUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield (0, userService_1.createUser)(req.body);
        res.status(201).json({ user: newUser, msg: 'User created successfully' });
    }
    catch (err) {
        res.status(400).json({ msg: err.message });
    }
});
exports.createNewUser = createNewUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
    }
    catch (err) {
    }
});
exports.getUsers = getUsers;
