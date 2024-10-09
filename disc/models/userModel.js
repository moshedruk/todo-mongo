"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    todos: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Todo' }]
});
// 3. Create a Model.
const UserModle = mongoose_1.default.model('User', userSchema);
exports.default = UserModle;
