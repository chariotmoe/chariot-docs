import { SidebarConfig } from "vuepress-vite";

export const sidebar: SidebarConfig = [
    {
        text: "Home",
        children: [
            "/index.md",
            "/FAQ.md"
        ]
    },
];
