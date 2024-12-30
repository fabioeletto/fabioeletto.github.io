<template>
  <div
    class="absolute xl:inset-x-[10%] xl:inset-y-[17%] inset-0 flex justify-center"
  >
    <div class="max-w-[1440px] min-h-[500px] w-full">
      <f-navigation
        :navigation-items="navigationItems"
        @navigation-item-change="$emit('navigation-item-change', $event)"
        @toggle-theme="$emit('toggle-theme')"
        class="xl:hidden flex"
      />
      <div
        class="flex flex-col justify-center relative w-full h-full min-h-full"
      >
        <f-top-left-corner-svg />
        <f-bottom-right-corner-svg />
        <f-navigation
          :navigation-items="navigationItems"
          @navigation-item-change="$emit('navigation-item-change', $event)"
          @toggle-theme="$emit('toggle-theme')"
          class="xl:flex hidden"
        />
        <div class="xl:px-16 px-5">
          <slot />
        </div>

        <f-footer class="flex justify-center" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from "@/types";

defineProps<{
  navigationItems: NavigationItem[];
}>();
</script>
