export type Theme = "light" | "dark";
export type Language = "en" | "de";
export type NavigationItemId = "home" | "about" | "projects" | "blogs" | "back";
export interface NavigationItem {
  id: NavigationItemId;
  label: String;
  mobileLabel?: String;
  icon?: String | String[];
  mobileIcon?: String | String[];
}
export type YearProjectDescription = {
  title: string;
  description: string;
  year: string;
  blogUrl?: string;
  techStack?: string[];
  githubUrl?: string;
};
