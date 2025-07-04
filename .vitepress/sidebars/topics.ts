import type { DefaultTheme } from "vitepress/types";

export const topicsSidebar: DefaultTheme.SidebarItem[] = [
  {
    text: "Interviewing sucessfully",
    link: "/topics/interviewing-sucessfully/",
  },
  {
    text: "Node Sync/Async",
    link: "/topics/nodejs-async-vs-sync/",
  },
  { text: "Survey Design", link: "/topics/survey-design/" },
  {
    text: "Android-Kotlin",
    base: "/topics/kotlin/",
    collapsed: true,
    items: [
      { text: "Annotations", link: "annotations/" },
      { text: "Basic Control Flow", link: "basic-control-flow/" },
      { text: "Basic Syntax Types", link: "basic-syntax-types/" },
      { text: "Classes", link: "classes/" },
      {
        text: "Constructor Default Values",
        link: "constructor-default-values/",
      },
      { text: "Data Binding", link: "data-binding/" },
      { text: "Data Classes", link: "data-classes/" },
      { text: "Delegated Properties", link: "delegated-properties/" },
      { text: "Delegation", link: "delegation/" },
      { text: "Enum Classes", link: "enum-classes/" },
      { text: "Generics", link: "generics/" },
      { text: "Gradle", link: "gradle/" },
      { text: "Grid Layout", link: "grid-layout/" },
      { text: "In Line Functions", link: "in-line-functions/" },
      { text: "Interface", link: "interface/" },
      { text: "Internet Data and Images", link: "internet-data-and-images/" },
      { text: "Kotlin Introduction", link: "introduction/" },
      { text: "Nested Classes", link: "nested-classes/" },
      { text: "Null Safety", link: "null-safety/" },
      { text: "Properties and Fields", link: "properties-and-fields/" },
      { text: "Returns and Jumps", link: "returns-and-jumps/" },
      { text: "Sealed Classes", link: "sealed-classes/" },
      { text: "Set Up", link: "set-up/" },
      { text: "Work Manager", link: "work-manager/" },
    ],
  },
  { text: "Angular Elements", link: "/topics/angular-elements/" },
  { text: "Angular Material", link: "/topics/angular-material/" },
  {
    text: "Angular Testing with Cucumber and Protractor",
    link: "/topics/angular-testing-cucumber/",
  },
  { text: "Angular Unit Tests", link: "/topics/angular-testing/" },
  { text: "Basic Introduction to Redux", link: "/topics/redux-intro/" },
  { text: "Big Picture of Web Dev", link: "/topics/big-picture-web-dev/" },
  {
    text: "Clean Code",
    base: "/topics/clean-code/",
    collapsed: true,
    items: [
      {
        text: "Overview",
        link: "index.md",
      },
      { text: "Data Science", link: "data-science/" },
      { text: "Java", link: "java/" },
      { text: "JavaScript", link: "java-script/" },
      { text: "Kotlin", link: "kotlin/" },
      { text: "Python", link: "python/" },
      { text: "SQL", link: "sql/" },
      { text: "XML", link: "xml/" },
      { text: "General Clean Code Guidelines", link: "general/" },
    ],
  },
  {
    text: "Git Basics",
    base: "/topics/git/",
    collapsed: true,
    items: [
      {
        text: "What's Git all about",
        link: "index.md",
      },
      {
        text: "Git and Github",
        link: "git-summary/",
      },
      {
        text: "Introduction to Git and Github",
        items: [
          {
            text: "Part 1",
            link: "setting-up-git/",
          },
          {
            text: "Part 2",
            link: "git-introduction/",
          },
        ],
      },
      {
        text: "Version Control & Scrum using Trello & Github",
        link: "version-control-and-scrum/",
      },
    ],
  },
  {
    text: "Git feature branching",
    link: "/topics/git-feature-branching/",
  },
  {
    text: "High performance dev teams",
    link: "/topics/high-performance-dev-teams/",
  },
];
