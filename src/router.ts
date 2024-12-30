import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/portfolio/index.vue"),
      children: [
        {
          path: "",
          alias: "home",
          component: () => import("@/views/portfolio/home.vue"),
        },
        {
          path: "about",
          component: () => import("@/views/portfolio/about.vue"),
        },
        {
          path: "projects",
          component: () => import("@/views/portfolio/projects.vue"),
        },
      ],
    },
    {
      path: "/blogs",
      component: () => import("@/views/blog/blog.vue"),
      children: [
        {
          path: "helix-scripts",
          component: () => import("@/views/blog/writings/helix-scripts.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
