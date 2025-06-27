import { DefaultTheme } from "vitepress";

export const webFoundationsTopics: DefaultTheme.SidebarItem = {
  text: "Web Foundations",
  base: "/topics/tech-big-picture/",
  collapsed: true,
  items: [],
};

export const webFoundationsProjects: DefaultTheme.SidebarItem = {
  text: "Web Foundations",
  base: "/projects/web-foundations/",
  collapsed: true,
  items: [
    {
      text: "Beginning Bash",
      link: "beginning-bash/",
    },
    {
      text: "Git Exercises",
      link: "git-exercises/",
    },
    {
      text: "FreeCodeCamp",
      collapsed: true,
      items: [
        {
          text: "JavaScript",
          collapsed: true,
          items: [
            {
              text: "Basic JavaScript",
              link: "free-code-camp/javascript/1-basic-javascript/",
            },
            {
              text: "ES6",
              link: "free-code-camp/javascript/2-es6/",
            },
            {
              text: "Regular Expressions",
              link: "free-code-camp/javascript/3-regular-expressions/",
            },
            {
              text: "Debugging",
              link: "free-code-camp/javascript/4-debugging/",
            },
            {
              text: "Basic Data Structures",
              link: "free-code-camp/javascript/5-basic-data-structures/",
            },
            {
              text: "Basic Algorithmic Scripting",
              link: "free-code-camp/javascript/6-basic-algorithmic-scripting/",
            },
            {
              text: "Object-Oriented Programming",
              link: "free-code-camp/javascript/7-object-oriented-programming/",
            },
            {
              text: "Functional Programming",
              link: "free-code-camp/javascript/8-functional-programming/",
            },
            {
              text: "Intermediate Algorithmic Scripting",
              link: "free-code-camp/javascript/9-intermediate-algorithmic-scripting/",
            },
          ],
        },
        {
          text: "Basic HTML and HTML5",
          link: "free-code-camp/responsive-web-design/1-basic-html-and-html-5/",
        },
        {
          text: "Basic CSS",
          link: "free-code-camp/responsive-web-design/2-basic-css/",
        },
        {
          text: "Applied Visual Design",
          link: "free-code-camp/responsive-web-design/3-applied-visual-design/",
        },
        {
          text: "Applied Accessibility",
          link: "free-code-camp/responsive-web-design/4-applied-accessibility/",
        },
        {
          text: "Responsive Web Design Principles",
          link: "free-code-camp/responsive-web-design/5-responsive-web-design-principles/",
        },
        {
          text: "CSS Flexbox",
          link: "free-code-camp/responsive-web-design/6-css-flexbox/",
        },
        {
          text: "CSS Grid",
          link: "free-code-camp/responsive-web-design/7-css-grid/",
        },
      ],
    },
    {
      text: "Level 2 Coding Challenges",
      link: "level-2/",
    },
  ],
};
