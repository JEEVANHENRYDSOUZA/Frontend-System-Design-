## Cross Site Request Forgery 
- Cross-Site Request Forgery (CSRF) is a type of security vulnerability that occurs when a malicious website, email, or other client-side script tricks a user's web browser into making an unintended and potentially harmful request to a different website where the user is authenticated.
### Causes of CSRF
- Working fundamental  working of REST API as they are stateless or statelessness of HTTP
- User authentication 
###  How to avoid this
- Use anti CSRF token , the server will send this first when the intial get request is made to the website which is then sent
aling with the request to the server again by the client when the client performs some soert of action 
- Reduce the time for which a user is logged in 
- Use alternate authentication mechanism such as two step 