const express= require('express');
const app = express();
app.listen(5500, ()=>{
    console.log("This our main server")
})

app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', "frame-ancestors 'none'")

    res.cookie('sessionID', '12345', {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
      });
    next();
})


// Serve static files (optional)
app.use(express.static('public'));

// Define your routes
app.get('/example1', (req, res) => {
    res.sendFile(__dirname + '/public/example1.html');
});




app.get('/example2', (req, res) => {
    res.sendFile(__dirname + '/public/example2.html');
});

app.get('/example3', (req, res) => {
    res.sendFile(__dirname + '/public/example3.html');
});