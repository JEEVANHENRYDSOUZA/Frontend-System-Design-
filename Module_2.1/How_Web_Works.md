## How Web Works
### Networking 
- Server: anything which can compute and which can give back a response
- IP Address: An IP address (Internet Protocol address) is a unique numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.
- Domain Name: for humans it is difficult to remeber the ip address we remember the domain name 
- Domain Name Server: gives the ip address associated with the domain name, returns back the ip         
- Modem : A modem (short for modulator-demodulator) is a device that modulates analog signals into digital signals for transmission over communication lines and demodulates digital signals into analog signals for reception.The input to the modem will be a digital signal in terms of 1 & 0 .Output will be an eclctric signals 
- Router: A router is a networking device that forwards data packets between computer networks.
- Browser (Cache):We do no want to go to the dns everytime so we cache the result 
- Service Worker: A service worker is a type of web worker, a script that runs in the background of a web page separate from the main browser thread
- Operating System : if browser cache is not present then we check operating system cache
- Router : if still we dont get then we go to the router
- ISP: still we have the isp cache 
- Number of Hops: The term "number of hops" refers to the count of intermediate network devices (routers or switches) that a data packet passes through while traveling from its source to its destination in a computer network
- ICANN: ICANN stands for the Internet Corporation for Assigned Names and Numbers. It is a nonprofit organization responsible for coordinating the maintenance and operational procedures of the Internet's Domain Name System (DNS), ensuring the stable and secure operation of the internet's unique identifier systems.
- WHOIS: WHOIS is a protocol used to query databases that store registration information about domain names, IP addresses, and other internet resources. 

### How does a Browser render webpage
- Loading : loading necessary data 
- Scripting : resolving the javascript
- Rendering : Merge the cssom with the dom to generete the render tree
- Painting : Building the entire website
