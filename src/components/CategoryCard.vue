<template>
    <div class="md:flex w-full rounded-md shadow md:h-20 cursor-pointer">
        <div class="w-full md:w-1/3 h-30 md:h-full bg-cover rounded-t-md md:rounded-none md:rounded-l-md w-bg-img"></div>
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
import { computed, defineProps, toRefs } from 'vue';

const props = defineProps({
    categoryImage: {
        type: String,
        default: null,
    },
});

const { categoryImage } = toRefs(props);

const categoryImgUrl = computed(() => `url(${categoryImage.value})`);
</script>

<style lang="scss" scoped>
.w-bg-img {
  background-image: v-bind('categoryImgUrl');
}
</style>
