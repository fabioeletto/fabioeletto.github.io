<template>
  <span
    class="hover:border-primary bg-surface-secondary border border-surface py-1 px-1 inline-flex justify-center items-center h-16 w-full"
  >
    <font-awesome-icon
      v-if="navigationItem.mobileIcon"
      :class="
        userSessionStore.currentNavigationItemId == navigationItem.id
          ? 'text-primary'
          : 'text-light'
      "
      :icon="navigationItem.mobileIcon"
      size="lg"
      class="mr-2"
    />
    <span class="text-white">
      {{ navigationItem.mobileLabel }}
    </span>
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
