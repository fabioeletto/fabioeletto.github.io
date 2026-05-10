<template>
  <section class="w-full">
    <p class="text-sm text-muted sm:text-base">Hello, my name is</p>
    <div class="my-4">
      <h1
        class="mb-2 text-5xl font-extrabold leading-none tracking-tight text-base-color sm:text-6xl xl:text-[4.2rem]"
      >
        Fabio Eletto<span class="hero-dot" />
      </h1>
      <p class="text-2xl font-medium text-base-color sm:text-4xl">
        I enjoy creating things that
        <span class="text-primary">make life easier</span>.
      </p>
    </div>
    <div>
      <p
        class="z-50 text-base leading-relaxed text-muted sm:text-2xl sm:leading-[1.45]"
      >
        I am a proficient full-stack web developer who specializes in developing
        web applications from the ground up. Furthermore, I am passionate about
        solving problems and am interested in working on ambitious projects with
        positive people.
      </p>
    </div>
    <div class="mt-8 flex flex-wrap items-center gap-4 sm:mt-12">
      <button
        @click="goToProjects"
        class="w-fit cursor-pointer rounded-full bg-light px-8 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px] hover:bg-white sm:text-base"
      >
        View Projects
      </button>
      <button
        @click="sendEmail"
        class="w-fit cursor-pointer rounded-full border border-current bg-transparent px-8 py-3 text-sm font-semibold text-base-color transition hover:translate-y-[-2px] hover:border-primary hover:text-primary sm:text-base"
      >
        Get in Touch
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToProjects() {
  router.push({ path: "/projects" });
}

function sendEmail() {
  window.location.href = "mailto:info@fabioeletto.de";
}
</script>
