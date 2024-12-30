<template>
  <p class="sm:text-lg text-sm">
    <span class="text-primary">Hello</span>, my name is
  </p>
  <div class="my-3">
    <p class="mb-1 sm:text-5xl text-4xl text-white">Fabio Eletto</p>
    <p class="sm:text-3xl text-xl">
      I enjoy creating things that
      <span class="text-primary">make life easier</span>.
    </p>
  </div>
  <div>
    <p class="sm:w-2/3 z-50 sm:text-base text-sm">
      I am a full-stack web developer specializing in building exceptional
      application from scratch. I love to solve problems and interested in
      working on ambitious projects with positive people.
    </p>
  </div>
  <button
    @click="sendEmail"
    class="sm:mt-12 mt-5 bg-primary/75 text-light sm:py-3 sm:px-4 py-2 px-3 cursor-pointer w-fit rounded-lg"
  >
    <span class="text-sm sm:text-base">Let's build something special</span>
  </button>
</template>

<script setup lang="ts">
function sendEmail() {
  window.location.href = "mailto:info@fabioeletto.de";
}
</script>
