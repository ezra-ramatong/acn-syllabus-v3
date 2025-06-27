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
      text: "Connection and Community",
      link: "connection-and-community/",
    },
  ],
};
