import type { App } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faGithub,
  faStackOverflow,
  faReadme,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faHome,
  faUser,
  faMoon,
  faSun,
  faArrowLeft,
  faAnglesRight,
  faBook,
  faChevronCircleLeft,
  faChevronCircleRight,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faSun,
  faMoon,
  faGithub,
  faEnvelope,
  faStackOverflow,
  faHome,
  faUser,
  faCode,
  faArrowLeft,
  faAnglesRight,
  faReadme,
  faBook,
  faChevronCircleLeft,
  faChevronCircleRight
);

export default {
  install: (app: App) => {
    app.component("FontAwesomeIcon", FontAwesomeIcon);
  },
};
