const express = require('express');
const app = express();
const path =require('path');

let data = 'Initial Data';
let copy_data = data;

const waitingClients = [];


app.use(express.static(path.join(__dirname,'public')));
app.use(express.json());
app.get('/',(req,res)=>{

    res.sendFile(__dirname,'/public/index.html')
})


app.get('/getData', (req, res) => {
  if (data !== copy_data) {
    res.json({ data });
  } else {
    waitingClients.push(res);
  }
});

// Use post/put to update
app.post('/getData', (req, res) => {
  data = req.body.data;
  copy_data=data;  

  while(waitingClients.length > 0) {
    const client = waitingClients.pop();
    client.json({ data });
  }

  res.send({ success: 'Data updated successfully'})
})

const port = process.env.PORT || 5011;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});