# Frontend Architecture

The frontend of Chariot is built with Nuxt 3, a powerful Vue-based framework that supports both server-side rendering (SSR) and static site generation (SSG). Chariot primarily uses SSG, which pre-renders the application into static HTML files during build time. This leads to faster loading times, improved SEO, and better overall performance, especially for content that doesn’t change often.

SSG is particularly useful in the context of Tauri, which wraps the Nuxt application to run as a native desktop app. Since the frontend is precompiled into static files, it can be bundled directly with the Tauri application, eliminating the need for a traditional web server. This results in a lightweight, responsive, and offline-capable desktop experience, with static assets served locally from the Tauri runtime.

Routing is handled via Nuxt’s file-based system, enhanced with custom middleware and navigation guards to manage access control and user flow. Components are organized using atomic design principles, making them reusable and easy to manage.

For the desktop version, Chariot is wrapped in Tauri, a secure and lightweight shell that allows web technologies to run as native applications. Tauri enables access to native system functionalities like the file system, notifications, and native dialogs while maintaining a small binary size. The Nuxt frontend is compiled and served inside Tauri, providing a consistent experience across web and desktop platforms.

Communication between Tauri and the backend can happen via HTTP or through inter-process communication (IPC), depending on the requirement. Tauri’s strict security model ensures that only approved system APIs are accessible, mitigating the risk of malicious access.