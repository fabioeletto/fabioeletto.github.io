<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      @click.self="emit('close')"
    >
      <button
        class="absolute right-4 top-4 rounded-full bg-surface px-3 py-1 text-sm font-semibold text-base-color"
        type="button"
        @click="emit('close')"
      >
        Close
      </button>
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="max-h-[90vh] w-full max-w-4xl rounded-xl object-contain"
      />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, watch } from "vue";

const props = defineProps<{
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
}>();

const emit = defineEmits<{
  close: [];
}>();

function handleEscape(event: KeyboardEvent) {
  if (event.key === "Escape" && props.isOpen) {
    emit("close");
  }
}

watch(
  () => props.isOpen,
  (isOpen) => {
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
      return;
    }

    window.removeEventListener("keydown", handleEscape);
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEscape);
});
</script>
