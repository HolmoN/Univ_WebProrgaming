"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matter_js_1 = __importDefault(require("matter-js"));
var bubble = matter_js_1.default.Bodies.circle(1, 1, 1);
console.log(bubble.position);
