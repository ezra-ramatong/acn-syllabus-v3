import { defineConfig } from "vitepress";

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
      "/topics/": [
        {
          text: "Foundations",
          base: "/topics/foundations/",
          collapsed: false,
          items: [
            {
              text: "The Epic Journey Begins!",
              link: "epic-journey",
            },
            {
              text: "HTML Fundamentals & Semantic Markup",
              link: "html-fundamentals",
            },
          ],
        },
        {
          text: "Web Design",
          collapsed: false,
          base: "/topics/web-design/",
          items: [{ text: "Introduction to Web Design", link: "/" }],
        },
        {
          text: "Intermediate JavaScript",
          collapsed: false,
          link: "/intermediate-javascript/",
        },
        {
          text: "Testing",
          collapsed: false,
          link: "/testing/",
        },
        {
          text: "Backend Fundamentals",
          collapsed: false,
          link: "/backend-fundamentals/",
        },
        {
          text: "Devops & Deployment",
          collapsed: false,
          link: "/devops-deployment/",
        },
        {
          text: "Databases",
          collapsed: false,
          link: "/databases/",
        },
        {
          text: "Frontend Frameworks",
          collapsed: false,
          link: "/frontend-frameworks/",
        },
        {
          text: "Mobile Development",
          collapsed: false,
          link: "/mobile-development/",
        },
      ],
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
