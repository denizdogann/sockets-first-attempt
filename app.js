const express = require("express");
const app = express();
const socket = require("socket.io")
app.use(express.static("public"));


const server = app.listen("3000", function(){
    console.log("server started");
})

const io = socket(server);

io.on("connection",function(socket){
    console.log("made socket connection.");
    console.log(socket.id);

    socket.on("colNumber", function(data){
        console.log(data);
    })
})