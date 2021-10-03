<template>
    <div v-if="!isSettingsPageMounted" class="h-full w-full overflow-hidden">
        <div class="ntwinds__livestream__details">
            <AvatarWithSideText class="h-full md:h-1/4" avatar-size="w-11 h-11">
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
                    <div class="flex space-x-2 pl-2">
                        <VideoCameraIcon class="w-6 h-6 cursor-pointer" />
                        <CogIcon class="w-6 h-6 cursor-pointer" @click="showStreamSettings" />
                    </div>
                </template>
            </AvatarWithSideText>
            <div class="hidden md:block w-full h-2/4 text-sm overflow-hidden">
                <p v-snip:js="5">
                    {{ Dummy.text(150) }}
                </p>
            </div>
            <div class="hidden md:flex w-full md:h-1/4 items-center justify-between">
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
    </div>
    <div v-else class="ntwinds__livestream__settings">
        <div class="flex justify-between">
            <ArrowCircleLeftIcon class="w-7 h-7 cursor-pointer" @click="showStreamSettings" />
            <div class="font-medium">Settings</div>
        </div>
        <div class="text-sm p-12 bg-gray-100">Upload Stream Preview</div>
        <div>
            <div class="text-sm mb-1 font-medium">Stream Link</div>
            <input type="text" class="inpt-md w-full" disabled value="http://localhost:3000/#/live/asd" />
        </div>
        <div>
            <div class="text-sm mb-1 font-medium">Stream Title</div>
            <input type="text" class="inpt-md w-full" />
        </div>
        <div>
            <div class="text-sm mb-1 font-medium">Description</div>
            <textarea rows="3" class="inpt p-3 w-full resize-none"></textarea>
        </div>
        <div>
            <div class="text-sm mb-1 font-medium">Outbound Links</div>
            <div class="w-full space-y-3">
                <input type="text" class="inpt-md w-full" />
                <input type="text" class="inpt-md w-full" />
                <input type="text" class="inpt-md w-full" />
            </div>
        </div>
        <div class="space-x-2">
            <button class="btn-md btn-primary">
                <VideoCameraIcon class="w-5 h-5 mr-1" />
                Start
            </button>
            <button class="btn-md btn-primary">
                <SaveIcon class="w-5 h-5 mr-1" />
                Save
            </button>
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, toRefs } from 'vue';
import { DotsVerticalIcon, ThumbUpIcon, ChatAlt2Icon, CogIcon, VideoCameraIcon, ArrowCircleLeftIcon, SaveIcon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import FloatMenu from './FloatMenu.vue';
import AvatarWithSideText from './base/AvatarWithSideText.vue';

const props = defineProps({
    avatar: {
        type: Boolean,
        default: false,
    },
});

const { avatar } = toRefs(props);

const isSettingsPageMounted = ref(false);

const showStreamSettings = () => {
    isSettingsPageMounted.value = !isSettingsPageMounted.value;
};

const submenu = [
    { name: 'Follow', route: 'home' },
    { name: 'Report', route: 'home' },
    { name: 'Reply', route: 'home' },
];
</script>
