<template>
    <div class="md:flex w-full rounded-md shadow md:h-20 cursor-pointer">
        <div
            class="w-full md:w-1/3 h-30 md:h-full bg-cover rounded-t-md md:rounded-none md:rounded-l-md"
            :style="`background-image: url(${categoryImage});`"
        ></div>
        <div class="w-full md:w-2/3 flex-grow px-3 py-2 overflow-hidden">
            <p class="font-semibold truncate mb-2">
                <slot name="title" />
            </p>
            <div class="flex flex-col text-xs">
                <slot name="details" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    categoryImage: {
        type: String,
        default: null,
    },
});

const { categoryImage } = toRefs(props);
</script>
