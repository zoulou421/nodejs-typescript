import express from "express"
import serveStatic from "serve-static";

export default class Server{
 constructor(private port:number) {
 }
 public start(){
     const app=express();

     app.use(serveStatic("public"));//To specify directory static resources

     app.get("/",(req, res)=>{
            res.send("Hello from Typescript/Nodejs");
     });
     app.listen(this.port,()=>{
         console.log("Server Typescript STARTED AT:"+this.port);
     });
 }
}