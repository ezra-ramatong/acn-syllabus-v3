import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ACN Syllabus",
  description: "African Coding Network Syllabus",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      { text: "Lolcat", link: "/cat" },
      { text: "Dogs", link: "/dogs/" },
    ],

    sidebar: {
      "/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
            { text: "Lolcat", link: "/cat" },
          ],
        },
      ],
      "/dogs/": [
        {
          base: "/dogs/",
          text: "Dogs",
          items: [
            { text: "Introduction", link: "intro" },
            { text: "Bulldog", link: "bulldog" },
            { text: "Dalmatian", link: "dalmatian" },
            { text: "Poodle", link: "poodle" },
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
