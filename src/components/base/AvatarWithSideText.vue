<template>
    <div class="bg-white flex w-full">
        <div class="ntwinds__avatar_placeholder cursor-pointer" :class="avatarSize">
            <slot name="thumbnail" />
        </div>
        <div class="flex-grow">
            <div class="grid grid-cols-1">
                <slot name="details" />
            </div>
        </div>
        <slot name="controls" />
    </div>
</template>

<script setup>
import { computed, defineProps, toRefs } from 'vue';

const props = defineProps({
    avatarSize: {
        type: String,
        default: null,
    },
});

const { avatarSize } = toRefs(props);
</script>
