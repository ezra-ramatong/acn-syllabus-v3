import type { DefaultTheme } from "vitepress/types";
import { onboardingProjects } from "./sections/onboarding";
import { techBigPictureProjects } from "./sections/tech-big-picture";

export const projectsSidebar: DefaultTheme.SidebarItem[] = [
  onboardingProjects,
  techBigPictureProjects,
];
