<template>
    <div class="ntwinds__page">
        <NavHeader class="border-b-2 border-gray-200 bg-white sticky top-0" :compress="false">
            <template #logo>
                <img class="h-8 w-8" src="../assets/placeholder/lion.svg" alt="logo-here" />
            </template>
            <template #rightExposed>
                <button class="focus:outline-none bg-blue-500 text-white font-medium py-2 px-6 rounded hover:bg-blue-700">Login</button>
                <FloatMenu :menu="submenu" position="right">
                    <DotsVerticalIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
                </FloatMenu>
            </template>
        </NavHeader>

        <div class="ntwinds__wide_layout">
            <div class="flex lg:space-x-5">
                <div class="ntwinds__sidebar hidden lg:block">
                    <Sidebar :is-live-now-active="true" />
                </div>
                <div class="flex-grow mb-14">
                    <div class="grid grid-cols-1">
                        <div class="hidden lg:block mb-5">
                            <BannerVideo
                                :backdrop-img="`https://placeimg.com/640/480/any?_${Math.random()}`"
                                :avatar="`https://placeimg.com/640/480/any?_${Math.random()}`"
                            >
                                <template #title>
                                    <p class="mb-1 text-sm font-semibold truncate cursor-pointer">
                                        {{ Dummy.text() }}
                                    </p>
                                    <div class="flex text-xs">
                                        <div class="font-semibold mr-1">1.5B</div>
                                        <div class="text-gray-500">Followers</div>
                                    </div>
                                    <div class="flex text-xs">
                                        <div class="font-semibold mr-1">1.5B</div>
                                        <div class="text-gray-500">Views</div>
                                    </div>
                                </template>
                                <template #post>
                                    {{ Dummy.text(10, 50) }}
                                </template>
                            </BannerVideo>
                        </div>
                        <div class="flex justify-between items-center mb-8 mt-5">
                            <div class="font-semibold">Recommended CATEGORY_NAME videos</div>
                            <input type="text" class="inpt-lg w-1/3 bg-gray-50 rounded-full" placeholder="Search video" />
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-3 gap-y-8">
                            <MiniVideoPreview
                                v-for="idx of 28"
                                :key="idx"
                                :avatar="`https://placeimg.com/500/480/any?_${Math.random()}`"
                                :preview-image="`https://placeimg.com/500/480/any?_${Math.random()}`"
                                :views="'12.3K'"
                            >
                            </MiniVideoPreview>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { DotsVerticalIcon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';
import Sidebar from '../components/Sidebar.vue';
import BannerVideo from '../components/BannerVideo.vue';
import MiniVideoPreview from '../components/MiniVideoPreview.vue';

const submenu = [
    { name: 'Register', route: 'home' },
    { name: 'Sign In', route: 'home' },
    { name: 'Forgot Password', route: 'home' },
    { name: 'Verify Account', route: 'home' },
];
</script>
