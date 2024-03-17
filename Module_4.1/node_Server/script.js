const express= require('express');
const app =express();
const path = require('path');


let data="This is initial data";
app.use(express.json());


app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{

    res.sendFile(__dirname,'/public/index.html')
})


app.post('/',(req,res)=>{
    const postData=req.body.data;
    data=postData;
    console.log("This is Post Request");


})


app.get('/getData',(req,res)=>{
    res.send({data})
})

app.listen(5500,()=>{
    console.log("app is running on port number 55000");
})

