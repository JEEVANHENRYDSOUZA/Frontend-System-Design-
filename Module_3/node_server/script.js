const express=require('express');
const app = express();

const redirectToHttps = (req, res, next) => {
    if (req.headers['x-forwarded-proto'] !== 'https') {
      // Redirect to HTTPS
      return res.redirect(['https://', req.get('Host'), req.url].join(''));
    }
    next();
  };

// this will perfrom http to https conversion but first request will be htt

//1. **`req.headers['x-forwarded-proto'] !== 'https'`:**
//  - The middleware checks if the `x-forwarded-proto` header is not set to 'https'. This header is commonly used in reverse proxy setups to indicate the protocol used by the client.

//2. **`res.redirect([...].join(''))`:**
  // - If the request is not using HTTPS, the middleware constructs the HTTPS URL by combining the 'https://' protocol, the host obtained from `req.get('Host')`, and the original URL from `req.url`.
  // - The `res.redirect` method is then used to send a redirect response to the browser with the HTTPS URL.

//3. **`next()`:**
   //- If the request is already using HTTPS, the middleware calls `next()` to pass control to the next middleware in the chain.





app.use((req, res, next) => {
  
    res.removeHeader('X-Powered-By');
    // removeing the X-powered-by
    res.setHeader('Referrer-Policy', 'no-referrer');
    // remove the referral policy 
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    // preload will not even allow the first request to be an http will automatically be upgraded to https
    next();
  });



app.get('/',(req,res)=>{
    res.send([{
        id:1,
        title:"namaste frontedn system design"
    }])
})


app.listen(5001,()=>{
    console.log("server is running on port 5501")
})
