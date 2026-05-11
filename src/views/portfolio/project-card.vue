<template>
  <div class="glass-pill relative mb-4 rounded-2xl px-4 py-3">
    <div class="absolute right-3 top-3 flex items-center gap-1.5 sm:gap-2">
      <button
        v-if="project.blogUrl"
        class="text-muted hover:text-base-color border border-primary/30 bg-primary/10 hover:bg-primary/20 inline-flex min-h-[36px] min-w-[36px] items-center justify-center gap-2 rounded-full px-2 py-1.5 text-xs font-medium transition-colors sm:min-h-0 sm:min-w-0 sm:px-2 sm:py-1"
        title="Open blog post"
        type="button"
        @click.stop="openBlog(project.blogUrl)"
      >
        <font-awesome-icon class="text-sm" icon="fa-solid fa-book" />
        <span class="hidden sm:inline">Blog</span>
      </button>
      <button
        v-if="project.githubUrl"
        class="text-muted hover:text-base-color border border-primary/30 bg-primary/10 hover:bg-primary/20 inline-flex min-h-[36px] min-w-[36px] items-center justify-center gap-2 rounded-full px-2 py-1.5 text-xs font-medium transition-colors sm:min-h-0 sm:min-w-0 sm:px-2 sm:py-1"
        title="Open GitHub repository"
        type="button"
        @click.stop="openGithub(project.githubUrl)"
      >
        <font-awesome-icon class="text-sm" icon="fa-brands fa-github" />
        <span class="hidden sm:inline">GitHub</span>
      </button>
      <button
        v-if="project.image"
        class="text-muted hover:text-base-color border border-primary/30 bg-primary/10 hover:bg-primary/20 inline-flex min-h-[36px] min-w-[36px] items-center justify-center gap-2 rounded-full px-2 py-1.5 text-xs font-medium transition-colors sm:min-h-0 sm:min-w-0 sm:px-2 sm:py-1"
        title="Open project image"
        type="button"
        @click.stop="openImage(project.image.src, project.image.alt)"
      >
        <font-awesome-icon class="text-sm" icon="fa-solid fa-image" />
        <span class="hidden sm:inline">Image</span>
      </button>
    </div>
    <h2 class="pr-28 text-lg font-bold text-base-color sm:pr-40 sm:text-2xl">
      <span class="flex items-center justify-start">{{ project.title }}</span>
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
  <project-image-modal
    :is-open="isImageModalOpen"
    :image-src="selectedImageSrc"
    :image-alt="selectedImageAlt"
    @close="closeImageModal"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import type { YearProjectDescription } from "@/types";
import projectImageModal from "@/components/project-image-modal.vue";

const router = useRouter();
const isImageModalOpen = ref(false);
const selectedImageSrc = ref("");
const selectedImageAlt = ref("");

defineProps<{
  project: YearProjectDescription;
}>();

function openBlog(blogUrl: string) {
  router.push(blogUrl);
}

function openGithub(githubUrl: string) {
  window.open(githubUrl, "_blank", "noopener,noreferrer");
}

function openImage(imageSrc: string, imageAlt: string) {
  selectedImageSrc.value = imageSrc;
  selectedImageAlt.value = imageAlt;
  isImageModalOpen.value = true;
}

function closeImageModal() {
  isImageModalOpen.value = false;
}
</script>
