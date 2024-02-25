//console.log("Welcome to typescript  node.js developper");
//Instantiate your server
import Server from "./server";

const port=(process.env.PORT||'7777');
let server=new Server(parseInt(port));
server.start();
