<template>
    <div class="ntwinds__bannervideo">
        <div class="ntwinds__bannervideo__container">
            <ChevronLeftIcon class="w-10 h-10 text-white cursor-pointer" />
            <div class="ntwinds__bannervideo__preview_panel">
                <div class="ntwinds__bannervideo__preview_live">
                    <!-- video player iframe here... -->
                </div>
                <div class="ntwinds__bannervideo__preview_info space-y-3">
                    <AvatarWithSideText avatar-size="w-10 h-10">
                        <template #thumbnail>
                            <img :src="avatar" alt="profile-pic" />
                        </template>
                        <template #details>
                            <slot name="title" />
                        </template>
                    </AvatarWithSideText>
                    <div class="text-sm">
                        <slot name="post" />
                    </div>
                </div>
            </div>
            <ChevronRightIcon class="w-10 h-10 text-white cursor-pointer" />
        </div>
        <div class="ntwinds__backdrop opacity-50" :style="`background-image: url(${backdropImg})`"></div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    backdropImg: {
        type: String,
        default: null,
    },
    avatar: {
        type: String,
        default: null,
    },
});

const { backdropImg, avatar } = toRefs(props);
</script>
