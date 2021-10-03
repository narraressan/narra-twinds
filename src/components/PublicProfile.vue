<template>
    <div class="w-full mb-4">
        <div
            class="ntwinds__profile__banner rounded-b-lg mb-3"
            :style="`background-image: url(https://placeimg.com/500/480/any?_${Math.random()})`"
        ></div>
        <AvatarWithSideText class="pl-3" avatar-size="w-30 h-30 border-5 border-white -mt-14">
            <template #thumbnail>
                <img :src="`https://placeimg.com/500/480/any?_${Math.random()}`" alt="profile-pic" />
            </template>
            <template #details>
                <p class="font-semibold truncate text-xxl">
                    {{ Dummy.text(3, 10) }}
                </p>
                <p class="text-xs mb-2 truncate">
                    {{ `${Dummy.text(1)}@email.com` }}
                </p>
            </template>
            <template #controls>
                <FloatMenu :menu="submenu" position="right">
                    <DotsVerticalIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
                </FloatMenu>
            </template>
        </AvatarWithSideText>
    </div>
    <div class="w-full px-3 flex flex-col space-y-5 mb-10">
        <p>
            {{ Dummy.text(19, 50) }}
            🙄🤯 #food#chill#flying#drone_hobby
        </p>
        <div class="flex space-x-2 items-center">
            <div class="text-sm">Follow me @</div>
            <img src="../assets/placeholder/facebook.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
            <img src="../assets/placeholder/instagram.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
            <img src="../assets/placeholder/youtube.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
            <img src="../assets/placeholder/twitch.png" alt="facebook" class="w-5 h-5 cursor-pointer" />
        </div>
    </div>
    <div class="w-full">
        <div class="grid grid-cols-3 text-center">
            <div
                class="items-center cursor-pointer p-3"
                :class="{ 'font-semibold border-b-3 border-gray-200': currentTab === tabs.GALLERY }"
                @click="currentTab = tabs.GALLERY"
            >
                Galley
            </div>
            <div
                class="items-center cursor-pointer p-3"
                :class="{ 'font-semibold border-b-3 border-gray-200': currentTab === tabs.FOLLOWERS }"
                @click="currentTab = tabs.FOLLOWERS"
            >
                Followers
                <span class="text-xs bg-blue-200 rounded-full px-2 py-1 font-semibold">13.5K</span>
            </div>
            <div
                class="items-center cursor-pointer p-3"
                :class="{ 'font-semibold border-b-3 border-gray-200': currentTab === tabs.FOLLOWING }"
                @click="currentTab = tabs.FOLLOWING"
            >
                Following
                <span class="text-xs bg-blue-200 rounded-full px-2 py-1 font-semibold">13.5K</span>
            </div>
        </div>
        <div v-if="currentTab === tabs.GALLERY" class="w-full space-y-5">
            <div class="w-full overflow-x-auto pt-2 pb-4">
                <div class="flex space-x-3">
                    <div v-for="idx of 14" :key="idx" class="bg-black rounded-lg">
                        <div class="w-36 h-46 text-xs">badge/trophy/rank</div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-6">
                <MiniVideoPreview
                    :is-live="true"
                    :preview-image="`https://placeimg.com/500/480/any?_${Math.random()}`"
                    :views="'12.3K'"
                    :likes="'245.3M'"
                    :comments="'134'"
                    timestamp="20/05/2020"
                >
                </MiniVideoPreview>
                <MiniVideoPreview
                    v-for="idx of 14"
                    :key="idx"
                    :is-live="false"
                    :preview-image="`https://placeimg.com/500/480/any?_${Math.random()}`"
                    :views="'12.3K'"
                    :likes="'245.3M'"
                    :comments="'134'"
                    timestamp="20/05/2020"
                >
                </MiniVideoPreview>
            </div>
        </div>
        <div v-if="currentTab === tabs.FOLLOWERS" class="w-full flex flex-col space-y-5 py-6">
            <AvatarWithSideText v-for="idx of 25" :key="idx" avatar-size="w-10 h-10">
                <template #thumbnail>
                    <img :src="`https://placeimg.com/500/480/any?_${Math.random()}`" alt="profile-pic" />
                </template>
                <template #details>
                    <p class="text-sm font-medium truncate cursor-pointer">
                        {{ Dummy.text(3, 10) }}
                    </p>
                    <div class="flex space-x-3 items-center text-xs text-gray-700">
                        <div class="flex items-center space-x-1.5">
                            <div class="font-semibold">13.4K</div>
                            <div>Followers</div>
                        </div>
                        <div class="flex items-center space-x-1.5">
                            <div class="font-semibold">18.4M</div>
                            <div>Following</div>
                        </div>
                    </div>
                </template>
                <template #controls>
                    <FloatMenu :menu="submenu" position="right">
                        <DotsVerticalIcon class="h-5 w-5 inline-flex" aria-hidden="true" />
                    </FloatMenu>
                </template>
            </AvatarWithSideText>
        </div>
        <div v-if="currentTab === tabs.FOLLOWING" class="w-full flex flex-col space-y-5 py-6">
            <AvatarWithSideText v-for="idx of 25" :key="idx" avatar-size="w-10 h-10">
                <template #thumbnail>
                    <img :src="`https://placeimg.com/500/480/any?_${Math.random()}`" alt="profile-pic" />
                </template>
                <template #details>
                    <p class="text-sm font-medium truncate cursor-pointer">
                        {{ Dummy.text(3, 10) }}
                    </p>
                    <div class="flex space-x-3 items-center text-xs text-gray-700">
                        <div class="flex items-center space-x-1.5">
                            <div class="font-semibold">13.4K</div>
                            <div>Followers</div>
                        </div>
                        <div class="flex items-center space-x-1.5">
                            <div class="font-semibold">18.4M</div>
                            <div>Following</div>
                        </div>
                    </div>
                </template>
                <template #controls>
                    <FloatMenu :menu="submenu" position="right">
                        <DotsVerticalIcon class="h-5 w-5 inline-flex" aria-hidden="true" />
                    </FloatMenu>
                </template>
            </AvatarWithSideText>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Dummy from 'dummyjs';
import { DotsVerticalIcon } from '@heroicons/vue/outline';

import FloatMenu from '../components/FloatMenu.vue';
import AvatarWithSideText from './base/AvatarWithSideText.vue';
import MiniVideoPreview from './MiniVideoPreview.vue';

const submenu = [
    { name: 'Follow/Unfollow', route: 'home' },
    { name: 'Report', route: 'home' },
];

const tabs = Object.freeze({
    GALLERY: 'GALLERY',
    FOLLOWERS: 'FOLLOWERS',
    FOLLOWINF: 'FOLLOWINF',
});

const currentTab = ref(tabs.GALLERY);
</script>
