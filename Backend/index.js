const express=require("express");
const { connection } = require("./config/connectDB");
const cors=require("cors");
const {userRouter} = require("./routes/user.router")
const {Server}=require ("socket.io")
const app=express();
const http=require("http");

const server=http.createServer(app)
app.use(cors({
    origin:"*"
}));

const io =new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"],
    }
})
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    });
  
    socket.on("send_message", (data) => {
      socket.to(data.room).emit("receive_message", data);
    });
  
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });

app.use(express.json({limit: '2mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.get("/",(req,res)=>{
    try{
res.send("Home page of api use end points")
    }catch(err){
        res.send(err);

    }
})
app.use("/users",userRouter)




server.listen(5001,async()=>{
try{
    await connection;
    console.log("Databse connected")

}catch(err){
console.log("somthing went wrong");
console.log(err)
}
console.log(`server is running on port ${5001}`)
})