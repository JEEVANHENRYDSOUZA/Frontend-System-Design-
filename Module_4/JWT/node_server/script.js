const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Array to store refresh tokens (for demo purposes)
let refreshTokens = [];
// Route to generate access and refresh tokens
app.post('/', (req, res) => {
  console.log("Received POST request at /");

  // Dummy authentication (replace with actual authentication logic)
  const username = "jeevan";
  const user = { name: username };

  // Generate access token with a longer expiration time
  const accessToken = generateAccessToken(user);
  
  // Generate refresh token and store it
  const refreshToken = jwt.sign(user,"1234");
  // Send access and refresh tokens in response
  res.json({ accessToken: accessToken, refreshToken: refreshToken });


});

// Route to exchange refresh token for a new access token
app.post('/token', (req, res) => {
console.log(refreshTokens)
  const refreshToken = refresh;
  console.log(refreshToken)
  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
  
  jwt.verify(refreshToken, "1234" ,(err, user) => {
    if (err) {
        console.log(err)
        return res.sendStatus(403)};
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
    console.log(`this is access ${accessToken}`)
  });
});


app.get('/',(req,res)=>{
    console.log("hello world")
})

// Route to revoke refresh token
app.delete('/logout', (req, res) => {
  refreshTokens = refreshTokens.filter(token => token !== req.body.token);
  res.sendStatus(204);
});

// Function to generate access token with a longer expiration time
function generateAccessToken(user) {
  // Expires in 15 minutes (900 seconds)
  return jwt.sign(user, "2222", { expiresIn: '15m' });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
