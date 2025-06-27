import { DefaultTheme } from "vitepress";

export const onboardingTopics: DefaultTheme.SidebarItem = {
  text: "Onboarding",
  base: "/topics/onboarding/",
  collapsed: false,
  items: [
    {
      text: "Welcome to your learning journey",
      link: "welcome/",
    },
    {
      text: "Meet the Umuzi team",
      link: "meet-the-team/",
    },
    {
      text: "Know and understand yourself",
      link: "know-and-understand-yourself/",
    },
    {
      text: "Connection and Community",
      link: "connection-and-community/",
    },
  ],
};
