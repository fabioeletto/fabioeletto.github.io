<template>
  <div class="glass-pill relative mb-4 rounded-2xl px-4 py-3">
    <div class="text-muted absolute right-3 top-3 flex items-center gap-3">
      <font-awesome-icon
        v-if="project.blogUrl"
        size="lg"
        icon="fa-solid fa-book"
        class="hover:cursor-pointer"
        title="Open blog post"
        @click.stop="openBlog(project.blogUrl)"
      />
      <font-awesome-icon
        v-if="project.githubUrl"
        size="lg"
        icon="fa-brands fa-github"
        class="hover:cursor-pointer"
        title="Open GitHub repository"
        @click.stop="openGithub(project.githubUrl)"
      />
      <font-awesome-icon
        v-if="project.image"
        size="lg"
        icon="fa-solid fa-image"
        class="hover:cursor-pointer"
        title="Open project image"
        @click.stop="openImage(project.image.src, project.image.alt)"
      />
    </div>
    <h2 class="text-lg font-bold text-base-color sm:text-2xl">
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
