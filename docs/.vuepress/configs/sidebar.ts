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
            "/architecture/overview.md",
            "/architecture/frontend.md",
            "/architecture/backend.md",
            "/architecture/api.md",
            "/architecture/database.md",
            "/architecture/security.md",
            "/architecture/build-deploy.md",
            "/architecture/monitoring.md",
        ]
    },
];
