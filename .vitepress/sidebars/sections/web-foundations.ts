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
              link: "free-code-camp/1-basic-javascript/",
            },
            {
              text: "ES6",
              link: "free-code-camp/2-es6/",
            },
            {
              text: "Regular Expressions",
              link: "free-code-camp/3-regular-expressions/",
            },
            {
              text: "Debugging",
              link: "free-code-camp/4-debugging/",
            },
            {
              text: "Basic Data Structures",
              link: "free-code-camp/5-basic-data-structures/",
            },
            {
              text: "Basic Algorithmic Scripting",
              link: "free-code-camp/6-basic-algorithmic-scripting/",
            },
            {
              text: "Object-Oriented Programming",
              link: "free-code-camp/7-object-oriented-programming/",
            },
            {
              text: "Functional Programming",
              link: "free-code-camp/8-functional-programming/",
            },
            {
              text: "Intermediate Algorithmic Scripting",
              link: "free-code-camp/9-intermediate-algorithmic-scripting/",
            },
          ],
        },
      ],
    },
    {
      text: "Level 2 Coding Challenges",
      link: "level-2/",
    },
  ],
};
