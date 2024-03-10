const express=require('express');
const app= express();
app.listen(3000,()=>{
    console.log("This is child server running on port  3000")
})


app.use(express.static('public'));

// Define your routes
app.get('/iframe1', (req, res) => {
  res.sendFile(__dirname + '/public/iframe1.html');
});


app.get('/iframe2', (req, res) => {
res.sendFile(__dirname + '/public/iframe2.html');
}); 


// Module_2/node_server/child_server/iframe1.html