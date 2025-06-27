import type { DefaultTheme } from "vitepress/types";
import { onboardingTopics } from "./sections/onboarding";
import { techBigPictureTopics } from "./sections/tech-big-picture";

export const topicsSidebar: DefaultTheme.SidebarItem[] = [
  onboardingTopics,
  techBigPictureTopics,
];
