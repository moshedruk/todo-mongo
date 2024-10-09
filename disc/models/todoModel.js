"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// 2. Create a Schema corresponding to the document interface.
const todoSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
});
// 3. Create a Model.
const TodoModle = mongoose_1.default.model('todos', todoSchema);
exports.default = TodoModle;
