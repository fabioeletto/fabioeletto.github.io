<template>
    <div class="flex justify-center items-center space-x-4">
        <button
            :disabled="currentPage <= 1"
            @click="onPageChange(currentPage - 1)"
        >
            <font-awesome-icon
                size="xl"
                icon="fa-chevron-circle-left"
                :class="currentPage <= 1 ? 'text-gray-400' : 'text-primary'"
            />
        </button>
        <span class="flex">{{ currentPage }} / {{ totalPages }}</span>
        <button
            :disabled="currentPage >= totalPages"
            @click="onPageChange(currentPage + 1)"
        >
            <font-awesome-icon
                size="xl"
                icon="fa-chevron-circle-right"
                :class="currentPage >= totalPages ? 'text-gray-400' : 'text-primary'"
            />
        </button>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
}>();

const emit = defineEmits<{
    (e: "page-change", page: number): void;
}>();

const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);


function onPageChange(page: number) {
    if (page >= 1 && page <= totalPages) {
        emit("page-change", page);
    }
}
</script>