import type { App } from "vue";
import { createI18n } from "vue-i18n";

export default {
  install: (
    app: App,
    messages: Record<string, Record<string, string>> = {},
  ) => {
    const i18n = createI18n({
      legacy: false, // to use Composition API
      locale: "en",
      fallbackLocale: "en",
      messages: {
        en: {
          ...messages.en,
        },
        de: {
          ...messages.de,
        },
      },
    });

    app.use(i18n);
  },
};
