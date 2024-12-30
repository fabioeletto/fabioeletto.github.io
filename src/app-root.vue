<template>
  <RouterView />
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { useUserSessionStore } from "./user-session-store";

const router = useRouter();
const userSessionStore = useUserSessionStore();

if (userSessionStore.theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
} else {
  document.documentElement.setAttribute("data-theme", "light");
}

router.push({ path: `/${userSessionStore.currentNavigationItemId}` });
</script>
