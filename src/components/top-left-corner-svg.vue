<template>
  <img
    :src="cornerSVG"
    class="absolute top-0 left-0 w-52 h-52 z-[-1] hidden xl:block"
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
