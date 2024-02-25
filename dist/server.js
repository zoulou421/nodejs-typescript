"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const serve_static_1 = __importDefault(require("serve-static"));
class Server {
    constructor(port) {
        this.port = port;
    }
    start() {
        const app = (0, express_1.default)();
        app.use((0, serve_static_1.default)("public")); //To specify directory static resources
        app.get("/", (req, res) => {
            res.send("Hello from Typescript/Nodejs");
        });
        app.listen(this.port, () => {
            console.log("Server Typescript STARTED AT:" + this.port);
        });
    }
}
exports.default = Server;
