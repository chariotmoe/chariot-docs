# Security Considerations

Security is a core concern in Chariot's design. Several mechanisms are in place to ensure data protection and secure operations:

- **CORS Policies** are strictly defined to limit access to trusted origins.

- **CSRF Protection** is considered, especially in scenarios involving cookies and session tokens.

- **Rate Limiting** middleware protects against brute-force and DDoS attacks.

- **XSS and SQL** Injection Protection is achieved through input validation and SQL parameterization.

- **HTTPS Enforcement** ensures all traffic is encrypted in production environments.

Tauri itself offers additional security through a hardened runtime, code signing, and user permission configuration.