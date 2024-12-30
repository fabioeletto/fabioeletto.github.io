<template>
  <footer
    class="block relative mt-20 xl:mt-0 xl:absolute xl:bottom-0 xl:left-0 text-xs text-base-color xl:px-16 px-5"
  >
    <p class="mr-2">© {{ new Date().getFullYear() }} Fabio Eletto</p>
    <span>
      <a href="https://github.com/fabioeletto" target="_blank">
        <font-awesome-icon
          size="lg"
          icon="fa-brands fa-github"
          class="duration-500 ml-4 hover:-translate-y-1"
        />
      </a>
      <a href="https://stackoverflow.com/users/14933883/fabio" target="_blank">
        <font-awesome-icon
          size="lg"
          icon="fa-brands fa-stack-overflow"
          class="duration-500 ml-4 hover:-translate-y-1"
        />
      </a>
      <a href="mailto:info@fabioeletto.de">
        <font-awesome-icon
          size="lg"
          :icon="['far', 'envelope']"
          class="duration-500 ml-4 hover:-translate-y-1"
        />
      </a>
    </span>
  </footer>
</template>
