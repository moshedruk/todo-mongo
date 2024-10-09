"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const usercontroller_1 = require("../controllers/usercontroller");
routerUser.post('/new', usercontroller_1.createNewUser);
routerUser.get('/users', usercontroller_1.getUsers);
exports.default = routerUser;
