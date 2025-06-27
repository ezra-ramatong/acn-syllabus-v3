import { DefaultTheme } from "vitepress";

export const onboardingTopics: DefaultTheme.SidebarItem = {
  text: "Onboarding",
  base: "/topics/onboarding/",
  collapsed: false,
  items: [
    {
      text: "Community and Connection",
      link: "community-connection/",
    },
  ],
};
