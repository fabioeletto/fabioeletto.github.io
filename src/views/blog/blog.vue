<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen sm:max-w-7xl w-full xl:mx-auto xl:p-20"
  >
    <f-navigation
      :navigation-items="navigationItems"
      @navigation-item-change="router.back()"
      @toggle-theme="$emit('toggle-theme')"
      class="xl:hidden flex"
    />
    <div
      class="flex flex-col justify-center relative sm:py-20 lg:px-16 w-full h-4/6 text-justify"
    >
      <f-top-left-corner-svg />
      <f-bottom-right-corner-svg />
      <f-navigation
        :navigation-items="navigationItems"
        @navigation-item-change="router.back()"
        class="xl:flex hidden"
      />
      <span class="px-5 mt-20 sm:mt-0">
        <RouterView />
      </span>
      <f-footer class="xl:flex hidden" />
    </div>
    <f-footer class="flex xl:hidden mb-4" />
  </div>
</template>
<script setup lang="ts">
import router from "@/router";
import { blogNavigationItems as navigationItems } from "@/config/navigation-items";
</script>
