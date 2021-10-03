<template>
    <AvatarWithSideText class="rounded-lg hover:bg-gray-100 items-center p-2 cursor-pointer" avatar-size="w-11 h-11">
        <template #thumbnail>
            <img :src="avatar" alt="profile-pic" />
        </template>
        <template #details>
            <p class="font-semibold truncate">
                <slot name="title" />
            </p>
            <div class="flex text-xs">
                <slot name="details" />
            </div>
        </template>
    </AvatarWithSideText>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    avatar: {
        type: String,
        default: null,
    },
});

const { avatar } = toRefs(props);
</script>
