"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//console.log("Welcome to typescript  node.js developper");
//Instantiate your server
const server_1 = __importDefault(require("./server"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = (process.env.PORT || '7799');
let server = new server_1.default(parseInt(port));
server.start();
//"test": "echo \"Error: no test specified\" && exit 1"
