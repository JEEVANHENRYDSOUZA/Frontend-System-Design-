## Security Headers
### 5 Types of Headers
- X- Powered by --- tells the server being used : if someone knows the server being utlizied they can tamoer the information 
- Referer-Policy ---The Referer (misspelled as "Referrer" in the HTTP specification) header in an HTTP request indicates the address of the webpage or resource from which the current request was initiated. 
- X-content-type-options  ---- When a browser receives a response from a server, it may perform MIME type sniffing to determine the type of content, especially when the server-provided Content-Type header is missing or ambiguous. 
MIME type sniffing, also known as content-type sniffing or media type sniffing, is a browser behavior where the browser attempts to determine the type of content (MIME type) of a resource based on its content rather than relying solely on the Content-Type header provided by the server
MIME type sniffing can lead to security vulnerabilities, such as when a browser interprets a file as executable code when it's supposed to be treated as plain text or HTML.
- XSS-Protection ---- Does not allow cross site scripting
- HSTS (Strict Transport Security) --- re-directing http request to https ---- hsts preload status even the first http request will not hit the server