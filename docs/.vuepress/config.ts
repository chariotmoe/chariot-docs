import { defaultTheme, defineUserConfig } from "vuepress-vite";
import searchPlugin from "@vuepress/plugin-search";
import { navbar } from "./configs/navbar";
import { sidebar } from "./configs/sidebar";

export default defineUserConfig({
    lang: "en-GB",
    base: "/chariot-docs/",
    title: "Chariot",
    head: [
        ["meta", { rel: "icon", href: "https://chariotmoe.github.io/chariot-docs/favicon.ico" }],
        ["meta", { property: "og:title", content: "Chariot" }],
        ["meta", { property: "og:image", content: "https://chariotmoe.github.io/chariot-docs/chariot.png" }],
        ["meta", { property: "og:description", content: "The house documentation for Chariot, a modern app that seamlessly combines note-taking and eBook reading into one intuitive platform." }],
        ["meta", { property: "theme-color", content: "#7E6AAD" }],
    ],
    description: "House documentation for Chariot",
    extendsPage: (data) => {
        if (data.frontmatter.permalink) {
            return;
        }

        if (data.path.endsWith(".html")) {
            data.path = data.path.slice(0, -5);
        } else if (data.dataFilePath.endsWith("/")) {
            data.path = data.path.slice(0, -1);
        }
    },
    pagePatterns: ["**/*.md", "!**/README.md", "!.vuepress", "!node_modules"],
    plugins: [searchPlugin({ locales: { "/": { placeholder: "Search" } } })],
    theme: defaultTheme({
        navbar,
        home: "/",
        sidebar,
        contributors: false,
        // lastUpdated: false,
        toggleColorMode: "Switch Theme",
        sidebarDepth: 3,
        docsDir: "docs",
        editLink: false,
    })
});
