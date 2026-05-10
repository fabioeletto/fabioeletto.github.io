<template>
  <div class="z-30 w-full">
    <div
      class="glass-pill ml-auto flex w-full items-center justify-between rounded-2xl px-2 py-2 xl:w-auto xl:gap-2 xl:rounded-full xl:px-3"
    >
      <div class="hidden items-center xl:flex">
        <div
          v-for="navigationItem in navigationItems"
          :key="`nav-item-${navigationItem.id}`"
          class="my-0 cursor-pointer"
          @click="$emit('navigation-item-change', navigationItem)"
        >
          <navigation-item-view :navigation-item="navigationItem" />
        </div>
      </div>

      <div class="grid w-full grid-flow-col gap-1 xl:hidden">
        <div
          v-for="navigationItem in navigationItems"
          :key="`mobile-nav-item-${navigationItem.id}`"
          class="my-0 cursor-pointer"
          @click="$emit('navigation-item-change', navigationItem)"
        >
          <navigation-item-mobile
            :navigation-item="navigationItem"
            class="flex"
          />
        </div>
      </div>

      <button
        type="button"
        class="ml-3 hidden h-8 w-14 items-center rounded-full border p-1 transition xl:flex"
        :class="
          userSessionStore.theme === 'dark'
            ? 'border-white/30 bg-white/10'
            : 'border-black/30 bg-black/10'
        "
        @click="$emit('toggle-theme')"
        aria-label="Toggle theme"
      >
        <span
          class="text-[11px]"
          :class="
            userSessionStore.theme === 'dark' ? 'text-white' : 'text-slate-900'
          "
          >{{ userSessionStore.theme === "dark" ? "☾" : "☀" }}</span
        >
        <span
          class="h-6 w-6 rounded-full shadow transition"
          :class="
            userSessionStore.theme === 'dark'
              ? 'translate-x-4 bg-white'
              : 'translate-x-0 bg-slate-900'
          "
        />
      </button>

      <button
        type="button"
        class="ml-2 flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-sm xl:hidden"
        :class="
          userSessionStore.theme === 'dark'
            ? 'text-white'
            : 'border-black/20 bg-black/5 text-slate-900'
        "
        @click="$emit('toggle-theme')"
        aria-label="Toggle theme"
      >
        {{ userSessionStore.theme === "dark" ? "☀" : "☾" }}
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { NavigationItem } from "../../types";
import { useUserSessionStore } from "../../user-session-store";
import navigationItemView from "./navigation-item.vue";
import navigationItemMobile from "./navigation-item-mobile.vue";

const userSessionStore = useUserSessionStore();

defineProps<{
  navigationItems: NavigationItem[];
}>();

defineEmits<{
  (event: "navigation-item-change", navigationItem: NavigationItem): void;
  (event: "toggle-theme"): void;
}>();
</script>
