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
    text: "Curious Learning and Research Strategy",
    link: "/topics/curious-learning-and-research/",
  },
  {
    text: "MEDIUM: Data Ethics",
    link: "/topics/intro-to-data-ethics/",
  },
  {
    text: "Data Ethics and Privacy",
    link: "/topics/data-ethics-and-privacy/",
  },
  {
    text: "Data Validation",
    link: "/topics/data_validation_and_verification/",
  },
  {
    text: "Data Validation and quality control",
    link: "/topics/data-validation-and-quality-control/",
  },
  { text: "ElasticSearch", link: "/topics/elastic-search/" },
  { text: "ExpressJS", link: "/topics/express-js/" },
  {
    text: "FreeCodeCamp",
    base: "/topics/free-code-camp/",
    collapsed: true,
    items: [
      { text: "Overview", link: "index.md" },
      {
        text: "Data Analysis with Python",
        link: "data-analysis-with-python/",
      },
      {
        text: "Maths for Programmers - Sets and Logic",
        link: "maths-for-programmers/",
      },
      {
        text: "Scientific Computing with Python",
        link: "scientific-computing-with-python/",
      },
      {
        text: "JavaScript Algorithms and Data Structures",
        collapsed: true,
        items: [
          {
            text: "Overview",
            link: "javascript-data-structures-and-algorithms/index.md",
          },
          {
            text: "Basic Algorithmic Scripting",
            link: "javascript-data-structures-and-algorithms/6-basic-algorithmic-scripting/",
          },
          {
            text: "Basic Data Structures",
            link: "javascript-data-structures-and-algorithms/5-basic-data-structures/",
          },
          {
            text: "Basic JavaScript",
            link: "javascript-data-structures-and-algorithms/1-basic-javascript/",
          },
          {
            text: "Debugging",
            link: "javascript-data-structures-and-algorithms/4-debugging/",
          },
          {
            text: "ES6",
            link: "javascript-data-structures-and-algorithms/2-es6/",
          },
          {
            text: "Functional Programming",
            link: "javascript-data-structures-and-algorithms/8-functional-programming/",
          },
          {
            text: "Intermediate Algorithmic Scripting",
            link: "javascript-data-structures-and-algorithms/9-intermediate-algorithmic-scripting/",
          },
          {
            text: "Object Oriented Programming",
            link: "javascript-data-structures-and-algorithms/7-object-oriented-programming/",
          },
          {
            text: "Regular Expressions",
            link: "javascript-data-structures-and-algorithms/3-regular-expressions/",
          },
        ],
      },
      {
        text: "Legacy Responsive Web Design",
        collapsed: true,
        items: [
          {
            text: "Applied Accesibility",
            link: "responsive-web-design/4-applied-accessibility/",
          },
          {
            text: "Applied Visual Design",
            link: "responsive-web-design/3-applied-visual-design/",
          },
          {
            text: "Basic CSS",
            link: "responsive-web-design/2-basic-css/",
          },
          {
            text: "Basic HTML and HTML5",
            link: "responsive-web-design/1-basic-html-and-html-5/",
          },
          {
            text: "CSS Flexbox",
            link: "responsive-web-design/6-css-flexbox/",
          },
          {
            text: "CSS Grid",
            link: "responsive-web-design/7-css-grid/",
          },
          {
            text: "Responsive Web Design Principles",
            link: "responsive-web-design/5-responsive-web-design-principles/",
          },
        ],
      },
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
    text: "Google forms like a boss",
    link: "/topics/google-forms-like-a-boss/",
  },
  {
    text: "High performance dev teams",
    link: "/topics/high-performance-dev-teams/",
  },
  {
    text: "How to ask for help with your code",
    link: "/topics/how-to-ask-for-help-with-your-code/",
  },
  {
    text: "How to be a professional remotely",
    link: "/topics/how-to-be-a-professional/",
  },
  {
    text: "How to download YouTube videos from the terminal",
    link: "/topics/how-to-download-youtube-videos-from-the-terminal/",
  },
  {
    text: "Intro to CSS architecture resources",
    link: "/topics/intro-to-css-architecture/",
  },
  {
    text: "Intro to Functional Programming",
    link: "/topics/functional-programming-intro/",
  },
  {
    text: "Intro to Hybrid Mobile",
    link: "/topics/intro-to-hybrid-mobile/",
  },
  {
    text: "Intro to Software Architecture",
    link: "/topics/basic-architecture-concepts/",
  },
  {
    text: "Introduction to Ajax",
    link: "/topics/intro-to-ajax/",
  },
  {
    text: "Introduction to Design Patterns",
    link: "/topics/design-patterns/",
  },
  {
    text: "Introduction to Dotenv module",
    link: "/topics/dotenv-module/",
  },
  {
    text: "Introduction to Node and SQL",
    link: "/topics/node-and-sql/",
  },
  {
    text: "Introduction to Pair Programming",
    link: "/topics/intro-to-pair-programming/",
  },
  {
    text: "Introduction to TypeScript",
    link: "/topics/intro-to-typescript/",
  },
  {
    text: "Introduction to unit tests with Mocha",
    link: "/topics/intro-to-unit-tests-with-mocha/",
  },
];
