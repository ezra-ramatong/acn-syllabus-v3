import { defineConfig } from "vitepress";
import { topicsSidebar } from "./sidebars/topics";

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
      "/projects/": [
        {
          text: "Projects",
          items: [
            {
              text: "Semitone",
              collapsed: false,
              base: "/projects/semitone-difference/",
              items: [
                { text: "Basic Algorithm", link: "semitone-basic" },
                {
                  text: "Simple GUI",
                  link: "semitone-simple-gui",
                },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  srcDir: "./content",
});

/*

           
*/
