<template>
  <div class="w-full h-full mt-80 sm:mt-20 xl:mt-0">
    <div
      class="flex flex-wrap flex-col-reverse xl:flex-row text-sm sm:text-base text-slate-300"
    >
      <div class="w-full xl:w-[72%] mt-3 xl:mt-0">
        <p class="mb-4">
          I’m a 25-year-old software developer based in Germany, driven by a passion for creating meaningful software that positively impacts people’s lives. 
          My journey into web development started in 2017 when I built a vocabulary web app to improve my academic performance. 
          That small project sparked a fascination with technology, turning into a career filled with learning, growth, and exciting opportunities.
        </p>
        <p class="mb-4">
          Fast-forward to today, I have established my
          <page-link
            :link-title="'own software company'"
            :link-path="'/blogs/helix-scripts'"
          />, developed numerous
          <page-link
            :link-title="'private projects'"
            :link-path="'/projects'"
          />, and was honored to receive scholarships from Vector Informatik and the "Deutschlandstipendium".
          These opportunities have allowed me to participate in several workshops and connect with
          many inspiring individuals. I am currently in my fifth semester pursuing a degree in Computer Science at the University of Applied Sciences in Karlsruhe. 
          Alongside my studies, I am gaining valuable practical experience as a working student at 
          <company-link
            :company-name="'Vector Informatik'"
            :company-url="'https://vector.com'"
          />, a leading provider of software solutions for automotive development, where I contribute to cutting-edge projects in the industry.
        </p>
        <p class="mb-2">
          Beyond coding, I have a passion for reading and enjoy meaningful conversations with like-minded individuals who share my enthusiasm for leveraging technology to create positive change. 
          Whether it’s collaborating on impactful projects, brainstorming innovative ideas, or exchanging experiences, I truly believe in the power of teamwork and collective creativity. 
          Together, we can achieve remarkable things and drive meaningful progress.
        </p>
      </div>
      <div class="w-full xl:w-[28%] flex justify-center align-middle">
        <img
          src="../../assets/me_pixel.png"
          alt="Fabio Eletto"
          class="float-right rounded-full max-w-full xl:h-[65%] align-middle border-none opacity-90 scale-x-[-1]"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CompanyLink from "@/components/company-link.vue";
import PageLink from "@/components/page-link.vue";
</script>
