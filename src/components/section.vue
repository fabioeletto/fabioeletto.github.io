<template>
  <div
    class="relative flex min-h-screen min-h-[100dvh] justify-center px-3 py-3 sm:px-6 sm:py-6 xl:items-center"
  >
    <div class="hero-shell relative">
      <div class="site-frame relative grid grid-rows-[auto_1fr_auto]">
        <f-top-left-corner-svg />
        <f-bottom-right-corner-svg />
        <header class="relative z-20 px-4 py-4 sm:px-8 xl:px-16">
          <f-navigation
            :navigation-items="navigationItems"
            @navigation-item-change="$emit('navigation-item-change', $event)"
            @toggle-theme="$emit('toggle-theme')"
            class="flex"
          />
        </header>
        <main
          class="site-frame-content relative z-10 flex items-center px-6 py-8 sm:px-10 xl:px-16"
        >
          <div class="w-full">
            <slot />
          </div>
        </main>
        <footer class="relative z-20 px-6 py-4 sm:px-10 xl:px-16">
          <f-footer class="flex" />
        </footer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { NavigationItem } from "@/types";

defineProps<{
  navigationItems: NavigationItem[];
}>();

defineEmits<{
  (event: "navigation-item-change", navigationItem: NavigationItem): void;
  (event: "toggle-theme"): void;
}>();
</script>
