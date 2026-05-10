<template>
  <span
    :class="{
      'mx-1 flex items-center justify-center rounded-full px-3 py-2 text-sm font-medium transition': true,
      'text-primary bg-white/10':
        userSessionStore.currentNavigationItemId == navigationItem.id,
      'text-base-color hover:text-primary':
        userSessionStore.currentNavigationItemId != navigationItem.id,
    }"
  >
    <font-awesome-icon
      v-if="navigationItem.icon"
      :icon="navigationItem.icon"
      size="lg"
      class="mr-2"
    />
    {{ navigationItem.label }}
  </span>
</template>
<script setup lang="ts">
import type { NavigationItem } from "../../types";
import { useUserSessionStore } from "../../user-session-store";

const userSessionStore = useUserSessionStore();

defineProps<{
  navigationItem: NavigationItem;
}>();
</script>
