import { DefaultTheme } from "vitepress";

export const techBigPictureTopics: DefaultTheme.SidebarItem = {
  text: "Tech Big Picture",
  base: "/topics/tech-big-picture/",
  collapsed: true,
  items: [
    {
      text: "How The Web Works",
      items: [
        { text: "Introduction", link: "intro/" },
        { text: "What is Software", link: "what-is-software/" },
        { text: "How the Internet Works", link: "how-the-internet-works/" },
        {
          text: "How Web Applications Work",
          items: [
            {
              text: "Part 1",
              link: "how-web-applications-work/part-1/",
            },
            {
              text: "Part 2",
              link: "how-web-applications-work/part-2/",
            },
            {
              text: "Part 3",
              link: "how-web-applications-work/part-3/",
            },
            {
              text: "Part 4",
              link: "how-web-applications-work/part-4/",
            },
            {
              text: "Part 5",
              link: "how-web-applications-work/part-5",
            },
          ],
        },
      ],
    },
    {
      text: "Technical Best Practices and Considerations",
      items: [
        {
          text: "Intro to Version Control GitHub",
          link: "intro-to-version-control-github/",
        },
        { text: "Intro to UI UX", link: "intro-to-ui-ux/" },
        { text: "Testing and QA", link: "testing-and-qa/" },
        { text: "Introduction to Security", link: "security/" },
        {
          text: "Security Best Practices for You",
          link: "security-best-practices-for-you/",
        },
        { text: "Intro to Dev Ops", link: "dev-ops/" },
      ],
    },
    {
      text: "Specific Technologies",
      items: [
        { text: "Mobile Development", link: "mobile-development/" },
        { text: "Cloud Computing", link: "cloud-computing/" },
        { text: "The Cloud and You", link: "the-cloud-and-you/" },
        { text: "Open Source", link: "open-source/" },
        { text: "Modern AI", link: "modern-ai/" },
      ],
    },
    {
      text: "Management and soft skills",
      items: [
        { text: "Ethics", link: "ethics/" },
        { text: "Different Roles", link: "different-roles/" },
      ],
    },
  ],
};

export const techBigPictureProjects: DefaultTheme.SidebarItem = {
  text: "Tech Big Picture",
  base: "/projects/tech-big-picture/",
  collapsed: true,
  items: [
    {
      text: "Technical Best Practices and Considerations",
      items: [
        { text: "Dev Ops Questions", link: "dev-ops-questions/" },
        { text: "Dev Team Collaboration", link: "dev-team-collaboration/" },
      ],
    },
    {
      text: "Specific Technologies",
      items: [
        { text: "Open Source Questions", link: "open-source-questions/" },
        { text: "Modern AI Questions", link: "modern-ai-questions/" },
      ],
    },
    {
      text: "Management and soft skills",
      items: [
        {
          text: "Software Processes and Agile Practices",
          link: "software-processes-and-agile-practices/",
        },
        {
          text: "Why Software Projects Fail",
          link: "why-software-projects-fail/",
        },
        { text: "Ethics Questions", link: "ethics-questions/" },
        {
          text: "Reflect on Personal Goals",
          link: "reflect-on-personal-goals/",
        },
      ],
    },
  ],
};
