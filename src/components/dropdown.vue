<template>
  <div>
    <select
      :value="modelValue"
      @change.prevent="onChange"
      class="block w-full px-2 py-1 text-base text-light bg-surface-secondary border border-light rounded-md"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
  modelValue: string;
  options: Array<{ value: string; text: string }>;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", selected: string): void;
}>();

const selected = ref(props.modelValue);

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  selected.value = target.value;
  emit("update:modelValue", target.value);
}
</script>
