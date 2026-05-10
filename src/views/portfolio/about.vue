<template>
  <div class="mt-8 h-full w-full sm:mt-10 xl:mt-0">
    <div
      class="flex flex-col-reverse flex-wrap items-start text-sm text-base-color sm:text-base xl:flex-row"
    >
      <div class="mt-3 w-full xl:mt-0 xl:w-[70%]">
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm"
        >
          About me
        </p>
        <p class="mb-5 text-base leading-8 text-base-color sm:text-lg">
          I’m a 25-year-old software developer based in Germany, driven by a
          passion for creating meaningful software that positively impacts
          people’s lives. My journey into web development started in 2017 when I
          built a vocabulary web app to improve my academic performance. That
          small project sparked a fascination with technology, turning into a
          career filled with learning, growth, and exciting opportunities.
        </p>
        <p class="mb-5 text-base leading-8 text-base-color sm:text-lg">
          Fast-forward to today, I have established my
          <page-link
            :link-title="'own software company'"
            :link-path="'/blogs/helix-scripts'"
          />, developed numerous
          <page-link
            :link-title="'private projects'"
            :link-path="'/projects'"
          />, and was honored to receive scholarships from Vector Informatik and
          the "Deutschlandstipendium". These opportunities have allowed me to
          participate in several workshops and connect with many inspiring
          individuals. I am currently in my fifth semester pursuing a degree in
          Computer Science at the University of Applied Sciences in Karlsruhe.
          Alongside my studies, I am gaining valuable practical experience as a
          working student at
          <company-link
            :company-name="'Vector Informatik'"
            :company-url="'https://vector.com'"
          />, a leading provider of software solutions for automotive
          development, where I contribute to cutting-edge projects in the
          industry.
        </p>
        <p class="mb-2 text-base leading-8 text-base-color sm:text-lg">
          Beyond coding, I have a passion for reading and enjoy meaningful
          conversations with like-minded individuals who share my enthusiasm for
          leveraging technology to create positive change. Whether it’s
          collaborating on impactful projects, brainstorming innovative ideas,
          or exchanging experiences, I truly believe in the power of teamwork
          and collective creativity. Together, we can achieve remarkable things
          and drive meaningful progress.
        </p>
      </div>
      <div class="flex w-full justify-center pt-2 xl:w-[30%]">
        <img
          src="../../assets/me_pixel.png"
          alt="Fabio Eletto"
          class="h-auto w-full max-w-[12rem] scale-x-[-1] rounded-full border-none object-contain align-middle opacity-90 sm:max-w-[14rem] xl:max-w-[18rem]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyLink from "@/components/company-link.vue";
import PageLink from "@/components/page-link.vue";
</script>
