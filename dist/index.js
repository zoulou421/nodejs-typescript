"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("Welcome to typescript  node.js developper");
//Instantiate your server
const server_1 = __importDefault(require("./server"));
const port = (process.env.PORT || '7777');
let server = new server_1.default(parseInt(port));
server.start();
