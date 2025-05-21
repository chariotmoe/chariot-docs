import { SidebarConfig } from "vuepress-vite";
import { join } from "path";
import { readdirSync } from "fs";

const architecturePath = join(__dirname, "..", "..", "architecture");
const architecture = readdirSync(architecturePath).filter((file) => file.endsWith(".md"));

export const sidebar: SidebarConfig = [
    {
        text: "Home",
        children: [
            "/index.md",
            "/FAQ.md"
        ]
    },
    {
        text: "Chariot's Architecture",
        collapsible: true,
        children: [
            "/architecture/Overview.md",
            "/architecture/Frontend Architecture.md",
            "/architecture/Backend Architecture.md",
            "/architecture/API Communication.md",
            "/architecture/Database Schema and Logging.md",
            "/architecture/Security Considerations.md",
            "/architecture/Build and Deployment.md",
            "/architecture/Monitoring and Logging.md",
        ]
    },
];
