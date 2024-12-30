<template>
  <router-link :to="{ path: linkPath }">
    <span class="underline decoration-primary underline-offset-4">{{
      linkTitle
    }}</span>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  linkTitle: string;
  linkPath: string;
}>();
</script>
