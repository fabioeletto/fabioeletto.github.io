import { defineStore } from "pinia";
import { ref } from "vue";
import type { NavigationItemId, Theme } from "./types";

interface UserSession {
  language: string;
  theme: Theme;
  currentNavigationItemId: NavigationItemId;
}

const LOCAL_USER_SESSION_STORAGE_KEY = "user-session-fabio-website";

export const useUserSessionStore = defineStore("user-session", () => {
  const language = ref("en");
  const theme = ref<Theme>("dark");
  const currentNavigationItemId = ref<NavigationItemId>("home");

  loadUserSessionFromLocalStorage();

  const setLanguage = (lang: string) => {
    language.value = lang;
    saveUserSessionToLocalStorage();
  };

  const setCurrentNavigationItemId = (navigationItemId: NavigationItemId) => {
    currentNavigationItemId.value = navigationItemId;
    saveUserSessionToLocalStorage();
  };

  const setTheme = (value: Theme) => {
    theme.value = value;
    saveUserSessionToLocalStorage();
  };

  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    saveUserSessionToLocalStorage();
  };

  function saveUserSessionToLocalStorage() {
    localStorage.setItem(
      LOCAL_USER_SESSION_STORAGE_KEY,
      JSON.stringify({
        language: language.value,
        theme: theme.value,
        currentNavigationItemId: currentNavigationItemId.value,
      }),
    );
  }

  function loadUserSessionFromLocalStorage() {
    const data = localStorage.getItem(LOCAL_USER_SESSION_STORAGE_KEY);
    if (data) {
      const session: UserSession = JSON.parse(data);
      language.value = session.language;
      theme.value = session.theme;
      currentNavigationItemId.value = session.currentNavigationItemId;
    }
  }

  return {
    language,
    theme,
    currentNavigationItemId,
    setLanguage,
    setCurrentNavigationItemId,
    setTheme,
    toggleTheme,
  };
});
