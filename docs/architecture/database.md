# Database Schema and Logic

Chariot uses [**MariaDB**](https://mariadb.org) as its relational database. The database schema is designed to support scalability and maintainability. As of now, it only includes one tables such as `users`.

- The `users` table stores basic user information, including hashed passwords.

All relationships are managed via foreign keys, and indexing is applied on frequently queried columns to optimise performance. The application uses `sqlx`, an async, compile-time verified SQL client that works well with Rust and MariaDB. Database migrations are managed using `sqlx migrate`, allowing for version-controlled schema changes.
