const express= require('express');
const app =express();
const path = require('path');
const server= require('socket.io')
const expressserver=app.listen(5500,()=>{
    console.log("app is running on port number 55000");
})

const io=server(expressserver);
io.on('connection', (socket) => {
    console.log('Connection established');

    // Event handler for 'chat message' event from a client
    socket.on('chat message', (msg) => {
        console.log('received message', msg);
        
        // Broadcast the received message to all connected clients
        io.emit('chat message', msg);
    });
});


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    res.sendFile(__dirname,'/public/index.html')
})


io.on('connection',(req,res)=>{

})



