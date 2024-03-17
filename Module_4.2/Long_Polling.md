## Long Polling
### Long Polling vs Short Polling 
- In short polling we send a request and we directly get a response and the connection is closed
- In long polling we send a request and then we wait if there is any  new data and then we send the response back 
- If there is no data update we do a timeout 
### Advantages
- It is a sinle long lived connection 
- Connection is kept open until we get new data or timeout
### Disdvantages
- Large number of connection more the load is kept online 
### Examples
- Real Time Communication 

