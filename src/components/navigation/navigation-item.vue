<template>
  <span
    :class="{
        'hover:text-primary mx-4 flex justify-center items-center': true,
        'text-primary': userSessionStore.currentNavigationItemId == navigationItem.id,
        'text-light': userSessionStore.currentNavigationItemId != navigationItem.id
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
