<template>
    <div class="flex flex-col space-y-2">
        <div class="ntwinds__mini_videopreview">
            <img class="ntwinds__backdrop__image" :src="previewImage" alt="profile-pic" />
            <div class="ntwinds__backdrop" :style="`background-image: url(${previewImage})`"></div>
            <div class="ntwinds__mini_videopreview__bottom_stats text-white text-sm">
                <div class="flex">
                    <span class="px-1.5 py-0.5 text-xs bg-gray-600 rounded space-x-1">
                        <span class="font-semibold">{{ views }}</span>
                        <span class="text-xxs">viewers</span>
                    </span>
                </div>
            </div>
        </div>
        <AvatarWithSideText class="items-center" avatar-size="w-12 h-12">
            <template #thumbnail>
                <img :src="avatar" alt="profile-pic" />
            </template>
            <template #details>
                <div class="font-medium truncate cursor-pointer">{{ Dummy.text(2, 5) }}</div>
                <!-- if no social accounts, show this text instead -->
                <!-- <div class="text-sm text-gray-600 font-medium truncate">{{ Dummy.text(10,50) }}</div> -->
                <div class="flex space-x-1.5">
                    <img src="../assets/placeholder/facebook.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                    <img src="../assets/placeholder/instagram.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                    <img src="../assets/placeholder/youtube.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                    <img src="../assets/placeholder/twitch.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                </div>
            </template>
        </AvatarWithSideText>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import Dummy from 'dummyjs';

import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    avatar: {
        type: Boolean,
        default: false,
    },
    // TODO: preview slideshow when hover
    previewImage: {
        type: String,
        default: null,
    },
    views: {
        type: String,
        default: 0,
    },
});

const { avatar, previewImage, views } = toRefs(props);
</script>
