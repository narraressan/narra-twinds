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
            <div class="flex lg:space-x-3">
                <div class="ntwinds__sidebar hidden lg:block">
                    <Sidebar />
                </div>
                <div class="flex-grow">
                    <div class="flex flex-col space-y-3">
                        <div class="placeholder"></div>
                        <div class="flex space-x-3">
                            <div class="flex-grow grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                                <div class="placeholder"></div>
                            </div>
                            <div class="ntwinds__adbar hidden lg:block">
                                <Adbar />
                            </div>
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

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';
import Sidebar from '../components/Sidebar.vue';
import Adbar from '../components/Adbar.vue';

const submenu = [
    { name: 'Register', route: 'home' },
    { name: 'Sign In', route: 'home' },
    { name: 'Forgot Password', route: 'home' },
    { name: 'Verify Account', route: 'home' },
];
</script>
