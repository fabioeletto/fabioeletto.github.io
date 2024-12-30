<template>
  <div class="w-full overflow-auto">
    <div class="mb-4">
      <div class="text-sm mb-3">
        <span
          class="inline-block sm:text-xs text-2xs mt-2 font-semibold px-2 pt-0.5 rounded border align-middle mr-2"
        >
          {{ date }}
        </span>
        <span
          class="inline-block sm:text-xs text-2xs mt-2 font-semibold px-2 pt-0.5 rounded border align-middle mr-2"
        >
          {{ readTimeMinutes }} minutes read
        </span>
      </div>
      <span
        class="sm:text-4xl text-2xl text-left mb-4 font-bold duration-500 text-white"
      >
        {{ title }}
      </span>
    </div>
    <div class="flex flex-wrap mb-4 text-dark-text text-base">
      <div class="w-full text-sm sm:text-base">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  date: string;
  readTimeMinutes: number;
}>();
</script>
