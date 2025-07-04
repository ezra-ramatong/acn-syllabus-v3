import { defineConfig } from "vitepress";
import { topicsSidebar } from "./sidebars/topics";
import { projectsSidebar } from "./sidebars/projects";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ACN Syllabus",
  description: "African Coding Network Syllabus",
  ignoreDeadLinks: true, // purely for demonstration purposes, always make it false
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: "local",
    },
    nav: [
      { text: "Topics", link: "/topics", activeMatch: "/topics/" },
      { text: "Projects", link: "/projects", activeMatch: "/projects/" },
      {
        text: "Syllabus",
        items: [
          {
            items: [
              { text: "Android", link: "/android" },
              { text: "Java", link: "/java" },
            ],
          },
        ],
      },
    ],

    sidebar: {
      "/topics/": topicsSidebar,
      "/projects/": projectsSidebar,
    },
    outline: {
      level: "deep",
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ezra-ramatong/acn-syllabus-v3",
      },
      { icon: "github", link: "https://github.com/Umuzi-org/ACN-syllabus" },
    ],
  },
  srcDir: "./content",
});

/*

           
*/
