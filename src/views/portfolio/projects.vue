<template>
  <div class="w-full h-full mt-20 sm:mt-0">
    <p
      class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm"
    >
      Projects
    </p>
    <p class="text-muted mb-4 text-xs sm:text-sm">
      Use the buttons in the top-right corner of each card to open the blog,
      GitHub, or image.
    </p>
    <div class="w-full h-full lg:flex-row">
      <div class="w-full">
        <project-card
          v-for="project in currentPageProjectsDescriptions"
          :key="project.title"
          :project="project"
        />
      </div>
      <div class="w-full">
        <f-pagination
          :total-items="yearsProjectsDescriptions.length"
          :items-per-page="itemsPerPage"
          :current-page="currentPage"
          @page-change="currentPage = $event"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { yearsProjectsDescriptions } from "../../config/years-projects-descriptions";
import projectCard from "./project-card.vue";

const currentPage = ref(1);
const itemsPerPage = 3;

const currentPageProjectsDescriptions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return yearsProjectsDescriptions.slice(start, end);
});
</script>
