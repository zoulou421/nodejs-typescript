import express from "express"
export default class Server{
 constructor(private port:number) {
 }
 public start(){
     const app=express();
     app.get("/",(req, res)=>{
            res.send("Hello from Typescript/Nodejs");
     });
     app.listen(this.port,()=>{
         console.log("Server Typescript STARTED AT:"+this.port);
     });
 }
}