<template>
  <span
    class="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/10 bg-transparent px-2 py-1"
  >
    <font-awesome-icon
      v-if="navigationItem.mobileIcon"
      :class="
        userSessionStore.currentNavigationItemId == navigationItem.id
          ? 'text-primary'
          : 'text-base-color'
      "
      :icon="navigationItem.mobileIcon"
      size="sm"
      class="mr-1"
    />
    <span class="text-xs">
      {{ navigationItem.mobileLabel || navigationItem.label }}
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
