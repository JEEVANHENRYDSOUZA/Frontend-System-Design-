## Dependency Security 
- The internal dependecy depends on other libraries
### How to avoid dependency security 
- Regular audits of dependencies --- npm audit / yarn audit 
- Enforcing Audits --- npm set audit true ---- will check audit if there is any update  or use dependabot
- Code & Dependency Monitoring --- using codeql
- Dependency Locking --- package-lock.json 
- Security Penetration testing using tools --- appscanner , burp suite  . zed attack protection 