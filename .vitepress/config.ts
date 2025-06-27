import { defineConfig } from "vitepress";
import { topicsSidebar } from "./sidebars/topics";
import { projectsSidebar } from "./sidebars/projects";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ACN Syllabus",
  description: "African Coding Network Syllabus",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Topics", link: "/topics", activeMatch: "/topics/" },
      { text: "Projects", link: "/projects", activeMatch: "/projects/" },
    ],

    sidebar: {
      "/topics/": topicsSidebar,
      "/projects/": projectsSidebar,
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  srcDir: "./content",
});

/*

           
*/
