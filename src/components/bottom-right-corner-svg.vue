<template>
  <img
    :src="cornerSVG"
    class="absolute bottom-0 right-0 w-52 h-52 rotate-180 z-[-1] hidden xl:block"
  />
</template>
<script setup lang="ts">
import { computed } from "vue";
import { useUserSessionStore } from "../user-session-store";
import darkCornerSVG from "../assets/corner-dark.svg";
import lightCornerSVG from "../assets/corner-light.svg";

const userSessionStore = useUserSessionStore();

const cornerSVG = computed(() =>
  userSessionStore.theme === "dark" ? darkCornerSVG : lightCornerSVG,
);
</script>
