# Backend Architecture

The backend is written in **Rust**, using the Axum web framework. Axum is a highly performant, type-safe, and modular framework built on top of Tokio and Hyper. It is well-suited for building scalable APIs and services with strong compile-time guarantees.

The backend is organized into clearly defined modules, each responsible for specific features such as user authentication, post management, scoring, and tagging. Routes are registered with Axum’s router and are grouped logically. Middleware is used to manage tasks such as logging, authentication checks, and rate limiting.

For authentication, Chariot uses **JWT (JSON Web Tokens)** to implement a stateless, token-based authentication system. Upon successful login, the server issues a signed JWT containing the user’s ID. This token is stored on the client side and sent with each subsequent request. On the server, middleware verifies the token’s integrity and authenticity before allowing access to protected resources. Passwords are hashed using **argon2**, a modern, secure, and memory-hard password hashing algorithm, to ensure they are securely stored in the database.
