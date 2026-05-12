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
          @page-change="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { yearsProjectsDescriptions } from "../../config/years-projects-descriptions";
import projectCard from "./project-card.vue";

const itemsPerPage = 3;
const totalPages = Math.ceil(yearsProjectsDescriptions.length / itemsPerPage);
const route = useRoute();
const router = useRouter();

function normalizePage(value: unknown) {
  const firstValue = Array.isArray(value) ? value[0] : value;
  const parsedPage = Number(firstValue);

  if (!Number.isFinite(parsedPage)) {
    return 1;
  }

  return Math.min(totalPages, Math.max(1, Math.trunc(parsedPage)));
}

const currentPage = ref(normalizePage(route.query.page));

const currentPageProjectsDescriptions = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return yearsProjectsDescriptions.slice(start, end);
});

function onPageChange(page: number) {
  const normalizedPage = normalizePage(page);
  currentPage.value = normalizedPage;

  const nextQuery = { ...route.query };
  if (normalizedPage === 1) {
    delete nextQuery.page;
  } else {
    nextQuery.page = String(normalizedPage);
  }

  router.replace({ query: nextQuery });
}

watch(
  () => route.query.page,
  (pageFromQuery) => {
    const normalizedPage = normalizePage(pageFromQuery);

    if (currentPage.value !== normalizedPage) {
      currentPage.value = normalizedPage;
    }

    const normalizedQueryValue = normalizedPage === 1 ? undefined : String(normalizedPage);
    const currentQueryValue = Array.isArray(pageFromQuery) ? pageFromQuery[0] : pageFromQuery;

    if (currentQueryValue !== normalizedQueryValue) {
      const nextQuery = { ...route.query };
      if (normalizedQueryValue) {
        nextQuery.page = normalizedQueryValue;
      } else {
        delete nextQuery.page;
      }
      router.replace({ query: nextQuery });
    }
  },
  { immediate: true },
);
</script>
