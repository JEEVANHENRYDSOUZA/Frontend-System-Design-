## What is Cross Site Scripting
- Cross Site Scripting occurs when someone is able to inject SCRIPT into our website from another website
### How does it happen 
- User Session Hijacking
- Unathorized Activity
- Capturing Keystrokes
- Stealing Critical Other Information 
- Phishing Attack
### Resolving the Attack 
- We should know the list of all possible inputs
- Instead of using Inner HTML replace it with Inner Text Content
- Use Escaping mechanism 
- Using React or any library 
- Use libraries like DOM purify 
- Use CSP headers 

### Using CSP headers
- It tells allowed sources from the content 
- Script Nonces
- Report C- only mode ---send a report if xss attack is taking place