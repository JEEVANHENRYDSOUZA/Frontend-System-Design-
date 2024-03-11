## Subresource Integrity
- Subresource Integrity (SRI) is a security feature that helps protect web applications against the injection of malicious or compromised content by ensuring that the resources (such as scripts and stylesheets) loaded from third-party servers have not been tampered with. 
### How does the browser calculate the hash
- Browser dowloads the resource
- Generates cryptographic hash using sh238, 512, 256
- Generates hash using component + algo + crypto function 
- Compares the hash with the generated integrity attribute 

### Benefits
- If third pary resource is compromised --- sha will change 
- Any content update inside the resource --- shaw will change