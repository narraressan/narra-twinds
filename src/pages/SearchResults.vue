<template>
    <div class="ntwinds__page">
        <NavHeader class="border-b-2 border-gray-200 bg-white sticky top-0">
            <template #logo>
                <img class="h-8 w-8" src="../assets/placeholder/lion.svg" alt="logo-here" />
            </template>
            <template #rightExposed>
                <button class="btn-md btn-primary">Login</button>
                <FloatMenu :menu="submenu" position="right">
                    <DotsVerticalIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
                </FloatMenu>
            </template>
        </NavHeader>

        <div class="ntwinds__compress_layout">
            <div class="flex lg:space-x-5">
                <div class="ntwinds__sidebar hidden lg:block">
                    <Sidebar />
                </div>
                <div class="flex-grow py-5">
                    <div class="grid grid-cols-1 gap-10">
                        <div class="w-full space-y-2">
                            <input type="text" class="inpt-lg w-full bg-gray-50 rounded-full" placeholder="Search for streamer, posts, videos, etc..." />
                            <div class="flex justify-between text-sm p-2 text-gray-600">
                                <div>Found: <span class="font-semibold">24</span> results</div>
                                <div>10 of 24</div>
                            </div>
                        </div>
                        <div class="w-full space-y-4">
                            <GenericSearchResult v-for="idx of 25" :key="idx" />
                        </div>
                    </div>
                </div>
                <div class="ntwinds__adbar hidden lg:block">
                    <Adbar />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { DotsVerticalIcon } from '@heroicons/vue/outline';

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';
import Sidebar from '../components/Sidebar.vue';
import Adbar from '../components/Adbar.vue';
import GenericSearchResult from '../components/GenericSearchResult.vue';

const submenu = [
    { name: 'Register', route: 'home' },
    { name: 'Sign In', route: 'home' },
    { name: 'Forgot Password', route: 'home' },
    { name: 'Verify Account', route: 'home' },
];
</script>
