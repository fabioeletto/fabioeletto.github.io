<template>
  <div
    class="grid fixed items-center text-center cursor-pointer xl:absolute top-0 xl:right-0 xl:px-4 text-base-color z-20 w-full xl:w-auto grid-flow-col"
  >
    <div
      v-for="navigationItem in navigationItems"
      :key="`nav-item-${navigationItem.id}`"
      class="my-0 font-bold"
      @click="$emit('navigation-item-change', navigationItem)"
    >
      <navigation-item-view
        :navigation-item="navigationItem"
        class="hidden xl:flex"
      />
      <navigation-item-mobile
        :navigation-item="navigationItem"
        class="xl:hidden flex"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NavigationItem } from "../../types";
import navigationItemView from "./navigation-item.vue";
import navigationItemMobile from "./navigation-item-mobile.vue";

defineProps<{
  navigationItems: NavigationItem[];
}>();
</script>
