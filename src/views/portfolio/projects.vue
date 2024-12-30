<template>
  <div class="w-full h-full mt-20 sm:mt-0">
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
          :totalItems="yearsProjectsDescriptions.length"
          :itemsPerPage="itemsPerPage"
          :currentPage="currentPage"
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
