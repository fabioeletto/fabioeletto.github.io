import type { NavigationItem } from "@/types";

export const portfolioNavigationItems: NavigationItem[] = [
  { id: "home", label: "Home", mobileIcon: "fa-home" },
  { id: "about", label: "About", mobileIcon: ["fas", "user"] },
  { id: "projects", label: "Projects", mobileIcon: "fa-code" },
];

export const blogNavigationItems: NavigationItem[] = [
  {
    id: "back",
    label: "Back to portfolio",
    mobileLabel: "Back to portfolio",
    icon: ["fas", "arrow-left"],
    mobileIcon: ["fas", "arrow-left"],
  },
];
