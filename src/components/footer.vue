<template>
  <footer
    class="flex flex-col items-center gap-2 text-xs text-muted sm:flex-row sm:gap-3 sm:text-sm"
  >
    <p class="text-center">© {{ new Date().getFullYear() }} Fabio Eletto</p>
    <span class="inline-flex items-center justify-center">
      <a href="https://github.com/fabioeletto" target="_blank">
        <font-awesome-icon
          size="lg"
          icon="fa-brands fa-github"
          class="transition hover:text-primary sm:ml-3"
        />
      </a>
      <a href="https://stackoverflow.com/users/14933883/fabio" target="_blank">
        <font-awesome-icon
          size="lg"
          icon="fa-brands fa-stack-overflow"
          class="ml-3 transition hover:text-primary"
        />
      </a>
      <a href="mailto:info@fabioeletto.de">
        <font-awesome-icon
          size="lg"
          :icon="['far', 'envelope']"
          class="ml-3 transition hover:text-primary"
        />
      </a>
    </span>
  </footer>
</template>
