<template>
  <f-section
    :navigation-items="navigationItems"
    @navigation-item-change="handleNavigationItemChange($event)"
  >
    <RouterView />
  </f-section>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useUserSessionStore } from "../../user-session-store";
import type { NavigationItem } from "../../types";
import { useRouter, useRoute } from "vue-router";
import { portfolioNavigationItems as navigationItems } from "../../config/navigation-items";

const router = useRouter();
const route = useRoute();
const userSessionStore = useUserSessionStore();

watch(
  route,
  (to) => {
    const pathWithoutSlash = to.path.replace("/", "");
    const navigationItem = navigationItems.find(
      (item) => item.id === pathWithoutSlash,
    );
    if (navigationItem) {
      userSessionStore.setCurrentNavigationItemId(navigationItem.id);
    }
  },
  { flush: "pre", immediate: true, deep: true },
);

function handleNavigationItemChange(navigationItem: NavigationItem) {
  userSessionStore.setCurrentNavigationItemId(navigationItem.id);
  router.push({ path: `/${navigationItem.id}` });
}
</script>
