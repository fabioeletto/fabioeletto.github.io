<template>
  <div
    :class="{
      'glass-pill relative mb-4 rounded-2xl px-4 py-3': true,
      'hover:cursor-pointer': hasProjectLinks(project),
    }"
    @click="openLink(project)"
  >
    <div
      class="text-muted absolute right-3 top-3 flex items-center justify-center"
    >
      <font-awesome-icon
        v-if="project.blogUrl"
        size="lg"
        icon="fa-solid fa-book"
      />
      <font-awesome-icon
        v-if="project.githubUrl"
        size="lg"
        icon="fa-brands fa-github"
      />
    </div>
    <h2 class="text-lg font-bold text-base-color sm:text-2xl">
      <span class="flex justify-start items-center">
        <span
          :class="{
            'hover:underline': hasProjectLinks(project),
          }"
        >
          {{ project.title }}
        </span>
      </span>
    </h2>
    <p class="text-muted mt-2 mb-1">{{ project.description }}</p>
    <div
      v-for="tech in project.techStack"
      :key="`${project.title}-${tech}`"
      class="inline-block text-xs mb-2"
    >
      <span class="mr-2 rounded-md bg-primary/30 px-1 py-1 text-base-color">
        {{ tech }}
      </span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import type { YearProjectDescription } from "@/types";

const router = useRouter();

defineProps<{
  project: YearProjectDescription;
}>();

function openLink(project: YearProjectDescription) {
  if (project.blogUrl) {
    router.push(project.blogUrl);
  }
  if (project.githubUrl) {
    window.open(project.githubUrl, "_blank");
  }
}

function hasProjectLinks(project: YearProjectDescription) {
  return project.blogUrl || project.githubUrl;
}
</script>
