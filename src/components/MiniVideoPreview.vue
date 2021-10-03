<template>
    <div class="flex flex-col space-y-2">
        <div class="ntwinds__mini_videopreview">
            <img v-if="previewImage" class="ntwinds__backdrop__image" :src="previewImage" alt="profile-pic" />
            <div class="ntwinds__backdrop" :style="`background-image: url(${previewImage})`"></div>
            <div class="ntwinds__mini_videopreview__bottom_stats text-white text-sm">
                <div class="flex space-x-2">
                    <div v-if="views" class="flex items-center px-1.5 py-0.5 text-xs bg-gray-600 rounded space-x-1 cursor-pointer">
                        <div class="font-medium">{{ views }}</div>
                        <CameraIcon class="w-3 h-3" />
                    </div>
                    <div v-if="comments" class="flex items-center px-1.5 py-0.5 text-xs bg-gray-600 rounded space-x-1 cursor-pointer">
                        <div class="font-medium">{{ comments }}</div>
                        <ChatAlt2Icon class="w-3 h-3" />
                    </div>
                    <div v-if="likes" class="flex items-center px-1.5 py-0.5 text-xs bg-gray-600 rounded space-x-1 cursor-pointer">
                        <div class="font-medium">{{ likes }}</div>
                        <ThumbUpIcon class="w-3 h-3" />
                    </div>
                </div>
            </div>
        </div>
        <AvatarWithSideText class="items-center" :avatar-size="avatar ? 'w-12 h-12' : null">
            <template #thumbnail>
                <img v-if="avatar" :src="avatar" alt="profile-pic" />
            </template>
            <template #details>
                <div class="font-medium truncate">
                    {{ Dummy.text(2, 5) }}
                </div>
                <!-- if no social accounts, show this text instead -->
                <!-- <div class="text-sm text-gray-600 font-medium truncate">{{ Dummy.text(10,50) }}</div> -->
                <div class="flex justify-between">
                    <div v-if="isLive" class="flex space-x-1.5">
                        <img src="../assets/placeholder/facebook.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                        <img src="../assets/placeholder/instagram.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                        <img src="../assets/placeholder/youtube.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                        <img src="../assets/placeholder/twitch.png" alt="facebook" class="w-4 h-4 cursor-pointer" />
                    </div>
                    <div class="flex text-xs text-gray-500 font-medium">{{ timestamp }}</div>
                </div>
            </template>
        </AvatarWithSideText>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import Dummy from 'dummyjs';
import { CameraIcon, ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/solid';

import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    avatar: {
        type: String,
        default: null,
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
    comments: {
        type: String,
        default: 0,
    },
    likes: {
        type: String,
        default: 0,
    },
    timestamp: {
        type: String,
        default: null,
    },
    isLive: {
        type: Boolean,
        default: false,
    },
});

const { avatar, previewImage, views } = toRefs(props);
</script>
