<template>
    <div class="ntwinds__page">
        <NavHeader class="border-b-2 border-gray-200 bg-white sticky top-0">
            <template #logo>
                <img class="h-8 w-8" src="../assets/placeholder/lion.svg" alt="logo-here" />
            </template>
            <template #rightExposed>
                <button class="btn btn-md btn-primary">Login</button>
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
                <div class="flex-grow py-5 w-full">
                    <div class="grid grid-cols-1 gap-10">
                        <StreamPost v-for="idx of 15" :key="idx" />
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
import StreamPost from '../components/StreamPost.vue';

const submenu = [
    { name: 'Register', route: 'home' },
    { name: 'Sign In', route: 'home' },
    { name: 'Forgot Password', route: 'home' },
    { name: 'Verify Account', route: 'home' },
];
</script>
