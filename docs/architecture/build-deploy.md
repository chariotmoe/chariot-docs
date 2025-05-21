# Build and Development

The build process varies slightly between the web and desktop versions. For the web, **Vite** is used alongside Nuxt 3 to generate optimized static files or a SSR-ready application. For the desktop version, the Nuxt build is bundled inside a Tauri project, compiled into native binaries using Rust’s toolchain.

The backend is compiled into a single static binary using Rust’s release mode and deployed to a server or container. Reverse proxies like Nginx can be used to manage HTTPS, caching, and request routing.

Environment variables are managed using `.env` files during development, and a secure secret manager in production environments. CI/CD pipelines are planned using GitHub Actions to automate builds, testing, and deployment.