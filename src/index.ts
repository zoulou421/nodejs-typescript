//console.log("Welcome to typescript  node.js developper");
//Instantiate your server
import Server from "./server";

const port=(process.env.PORT||'7788');
let server=new Server(parseInt(port));
server.start();

//"test": "echo \"Error: no test specified\" && exit 1"
