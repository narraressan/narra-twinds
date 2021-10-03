<template>
    <div class="ntwinds__livestream__details">
        <AvatarWithSideText class="h-2/3 md:h-1/4" avatar-size="w-11 h-11">
            <template #thumbnail>
                <img :src="avatar" alt="profile-pic" />
            </template>
            <template #details>
                <p class="font-medium truncate cursor-pointer">
                    {{ Dummy.text(3, 10) }}
                </p>
                <div class="flex text-xs text-gray-500 font-medium">Started 1.5 hrs ago</div>
            </template>
            <template #controls>
                <FloatMenu :menu="submenu" position="right">
                    <DotsVerticalIcon class="h-5 w-5 inline-flex" aria-hidden="true" />
                </FloatMenu>
            </template>
        </AvatarWithSideText>
        <div class="hidden md:block w-full h-2/4 text-sm overflow-hidden">
            <p v-snip:js="5">
                {{ Dummy.text(150) }}
            </p>
        </div>
        <div class="h-1/3 md:h-1/4 flex items-center justify-between">
            <div class="flex space-x-3 items-center text-xs font-semibold text-gray-700">
                <div class="flex items-center space-x-1.5">
                    <div>13.4K</div>
                    <div class="bg-gray-200 rounded-full w-6 h-6 p-1">
                        <ThumbUpIcon class="w-full h-full" />
                    </div>
                </div>
                <div class="flex items-center space-x-1.5">
                    <div>18.4M</div>
                    <div class="bg-gray-200 rounded-full w-6 h-6 p-1">
                        <ChatAlt2Icon class="w-full h-full" />
                    </div>
                </div>
            </div>
            <div class="flex space-x-2 items-center">
                <img src="../assets/placeholder/facebook.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/instagram.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/youtube.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
                <img src="../assets/placeholder/twitch.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
            </div>
        </div>
    </div>
    <div class="ntwinds__livestream__comments">
        <AvatarWithSideText v-for="idx of 50" :key="idx" avatar-size="w-7 h-7">
            <template #thumbnail>
                <img :src="`https://placeimg.com/500/480/any?_${Math.random()}`" alt="profile-pic" />
            </template>
            <template #details>
                <p class="text-sm font-medium truncate cursor-pointer">
                    {{ Dummy.text(3, 10) }}
                </p>
                <div class="flex text-xs text-gray-700 mb-2">
                    {{ Dummy.text(10, 50) }}
                </div>
                <div class="flex text-xxs text-gray-500 font-medium">1.5 hrs ago</div>
            </template>
            <template #controls>
                <FloatMenu :menu="submenu" position="right">
                    <DotsVerticalIcon class="h-5 w-5 inline-flex" aria-hidden="true" />
                </FloatMenu>
            </template>
        </AvatarWithSideText>
    </div>
    <div class="ntwinds__livestream__write_comment">
        <div class="ntwinds__avatar_placeholder h-9 w-9">
            <img :src="avatar" alt="profile-pic" />
        </div>
        <div class="flex-grow mr-3">
            <textarea
                rows="2"
                class="focus:outline-none w-full rounded-lg border-1 border-gray-200 p-2 text-xs bg-gray-50 resize-none"
                placeholder="Write comment..."
            ></textarea>
        </div>
        <div class="flex">
            <button class="btn-circle-md btn-primary">
                <ThumbUpIcon class="w-5 h-5" />
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { DotsVerticalIcon, ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import FloatMenu from '../components/FloatMenu.vue';
import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    avatar: {
        type: Boolean,
        default: false,
    },
});

const { avatar } = toRefs(props);

const submenu = [
    { name: 'Follow', route: 'home' },
    { name: 'Report', route: 'home' },
];
</script>
