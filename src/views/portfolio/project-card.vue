<template>
    <div
        :class="{
            'px-4 py-2 border border-white rounded-lg mb-4 relative': true,
            'hover:cursor-pointer': hasProjectLinks(project),
            }"
        @click="openLink(project)"
        >
          <div
            class="absolute top-2 right-2 flex justify-center items-center text-white"
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
          <h2 class="sm:text-2xl text-lg font-bold text-white">
            <span
              class="flex justify-start items-center"
            >
              <span
                :class="{
                  'hover:underline': hasProjectLinks(project),
                }"
              >
                {{ project.title }}
              </span>
            </span>
          </h2>
          <p class="mt-2 mb-1">{{ project.description }}</p>
          <div
            v-for="tech in project.techStack"
            :key="`${project.title}-${tech}`"
            class="inline-block text-2xs mb-2"
          >
            <span class="text-white px-1 py-1 mr-2 rounded-md bg-primary/40">
              {{ tech }}
            </span>
          </div>
        </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
import type { YearProjectDescription } from '@/types';

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