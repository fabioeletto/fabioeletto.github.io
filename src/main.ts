import { createApp, h, type App } from "vue";
import { createPinia } from "pinia";
import fontawesomePlugin from "./config/fontawesome";
import i18nPlugin from "./config/i18n";
import appRoot from "@/app-root.vue";

import "./main.css";
import router from "./router";
import { appIntl } from "./config/i18n.app";
import section from "./components/section.vue";
import navigation from "./components/navigation/navigation.vue";
import dropdown from "./components/dropdown.vue";
import footer from "./components/footer.vue";
import writingContainer from "@/components/writing-container.vue";
import topLeftCornerSvg from "@/components/top-left-corner-svg.vue";
import bottomRightCornerSvg from "./components/bottom-right-corner-svg.vue";
import pagination from "./components/pagination.vue";

const app: App = createApp({
  async mounted() {
    await router.isReady();
  },
  render: () => {
    return h(appRoot);
  },
});

app.use(createPinia());
app.use(router);

app.use(i18nPlugin, appIntl);
app.use(fontawesomePlugin);

app.component("f-section", section);
app.component("f-navigation", navigation);
app.component("f-dropdown", dropdown);
app.component("f-pagination", pagination);
app.component("f-footer", footer);
app.component("f-writing-container", writingContainer);
app.component("f-top-left-corner-svg", topLeftCornerSvg);
app.component("f-bottom-right-corner-svg", bottomRightCornerSvg);

app.mount("#app");
