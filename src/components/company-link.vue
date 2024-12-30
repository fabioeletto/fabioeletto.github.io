<template>
  <a
    :href="companyUrl"
    target="_blank"
    class="underline decoration-primary underline-offset-4"
  >
    {{ companyName }}
  </a>
</template>
<script setup lang="ts">
defineProps<{
  companyName: string;
  companyUrl: string;
}>();
</script>
