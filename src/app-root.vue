<template>
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted, watch } from "vue";
import { useRouter } from "vue-router";
import { useUserSessionStore } from "./user-session-store";

const router = useRouter();
const userSessionStore = useUserSessionStore();
const THEME_RELOAD_GUARD_KEY = "theme-reload-safari-guard";

function isSafariBrowser() {
  const userAgent = navigator.userAgent;
  return /Safari/i.test(userAgent) && !/Chrome|Chromium|CriOS|Edg|OPR|Firefox|FxiOS|Android/i.test(userAgent);
}

watch(
  () => userSessionStore.theme,
  (newTheme, oldTheme) => {
    document.documentElement.setAttribute("data-theme", newTheme);

    if (!oldTheme || oldTheme === newTheme || !isSafariBrowser()) {
      sessionStorage.removeItem(THEME_RELOAD_GUARD_KEY);
      return;
    }

    const hasReloadedForThemeToggle = sessionStorage.getItem(THEME_RELOAD_GUARD_KEY) === "1";

    if (!hasReloadedForThemeToggle) {
      sessionStorage.setItem(THEME_RELOAD_GUARD_KEY, "1");
      window.location.reload();
      return;
    }

    sessionStorage.removeItem(THEME_RELOAD_GUARD_KEY);
  },
  { immediate: true },
);

onMounted(async () => {
  await router.isReady();

  const currentRoute = router.currentRoute.value;
  const isRootPath = currentRoute.path === "/";
  const hasQuery = Object.keys(currentRoute.query).length > 0;
  const hasHash = Boolean(currentRoute.hash);

  if (isRootPath && !hasQuery && !hasHash) {
    router.replace({ path: `/${userSessionStore.currentNavigationItemId}` });
  }
});
</script>
