"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = async (url) => {
    await mongoose_1.default.connect(url);
};
exports.connection = connection;
//# sourceMappingURL=index.js.map