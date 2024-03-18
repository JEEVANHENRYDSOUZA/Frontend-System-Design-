## Websocket
### Advantages
- Full Duplexed
- Long Lived TCP connection
- Bi-directional Continous Connection
### Working 
- HTTP handshake which will upgrade the connection 
- Once connection is open then communication will start 


### Using Socket.io to make the connection 
- First we need an http server running
- We attach socket.io on to that server , which means the server has socket.io capabilite
- Now we will listen to an http request by the client on this server
- Since we have socket.io already running on the server we will listen for http request and will intercept it and then will negotiate to upgrade it to ws
- We will then check does both the client and server have websocket capabilites, once we find that it has http capabilites
then we will start with the htttp upgrade
- Hence before sending the http request to the websocket server we need to include the cdn for socket.io in the client as 
most modern browser do not have http capabilites

### Use Cases
- Used in real time gaming
- Stock trading sites


### Challenges
- Sticky Connection (have previous messages also setup)
- Load Balancer
- Number of Connection 
- Authentication as connection is upgraded to ws
- Firewalls/Proxy as they will not always allow websocket
- Cache
- Scaling 
- Testing and debuggging how to test real connection , no solid frameworks available
- Backward Compatibility, what if wss goes don  --- downgrade communication 
- Resource Clean - up
- Fault Tolerant 