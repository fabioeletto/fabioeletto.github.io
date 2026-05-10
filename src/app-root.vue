<template>
  <RouterView />
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useUserSessionStore } from "./user-session-store";

const router = useRouter();
const userSessionStore = useUserSessionStore();

watchEffect(() => {
  document.documentElement.setAttribute("data-theme", userSessionStore.theme);
});

router.push({ path: `/${userSessionStore.currentNavigationItemId}` });
</script>
