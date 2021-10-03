<template>
    <div class="ntwinds__videopreview">
        <img class="ntwinds__backdrop__image" :src="previewImage" alt="profile-pic" />
        <div class="ntwinds__backdrop" :style="`background-image: url(${previewImage})`"></div>
        <div class="ntwinds__videopreview__top_stats text-white">
            <div v-if="isLive" class="flex space-x-2">
                <span class="px-2 py-0.5 text-xs bg-red-600 rounded font-semibold cursor-pointer inline-flex items-center">LIVE</span>
            </div>
            <div class="flex">
                <!-- TODO: include controls (e.g. hide, report, etc) -->
            </div>
        </div>
        <div class="ntwinds__videopreview__bottom_stats text-white text-sm">
            <div class="flex">
                <span class="px-1.5 py-0.5 text-xs bg-gray-600 rounded space-x-1">
                    <span class="font-semibold">{{ views }}</span>
                    <span class="text-xxs">viewers</span>
                </span>
            </div>
            <div class="flex space-x-2">
                <img src="../assets/placeholder/facebook.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/instagram.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/youtube.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/twitch.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';

const props = defineProps({
    isLive: {
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

const { isLive, previewImage, views } = toRefs(props);
</script>
