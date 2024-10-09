"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerUser = express_1.default.Router();
const { register, getProfile, setSetting } = require('../controllers/userController');
router.post('/register', register);
router.get('/profile', getProfile);
exports.default = routerUser;
