<template>
    <div class="ntwinds__page">
        <NavHeader class="border-b-2 border-gray-200 bg-white sticky top-0">
            <template #logo>
                <img class="h-8 w-8" src="../assets/placeholder/lion.svg" alt="logo-here" />
            </template>
            <template #rightExposed>
                <button class="btn-circle-sm btn-primary">
                    <SearchIcon class="w-5 h-5" />
                </button>
                <button class="relative p-1 focus:outline-none">
                    <BellIcon class="h-6 w-6 inline-flex" aria-hidden="true" />
                    <span class="flex absolute h-2 w-2 top-0 right-0">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                </button>
                <FloatMenu :menu="submenu" position="right">
                    <img
                        class="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="profile-pic"
                    />
                </FloatMenu>
            </template>
        </NavHeader>

        <div class="ntwinds__compress_layout">
            <div class="flex lg:space-x-5">
                <div class="ntwinds__sidebar hidden lg:block">
                    <Sidebar />
                </div>
                <div class="flex-grow pb-5">
                    <div class="grid grid-cols-1">
                        <PrivateProfile />
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
import { DotsVerticalIcon, BellIcon, SearchIcon } from '@heroicons/vue/outline';

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';
import Sidebar from '../components/Sidebar.vue';
import Adbar from '../components/Adbar.vue';
import PrivateProfile from '../components/PrivateProfile.vue';

const submenu = [
    { name: 'Profile', route: 'home' },
    { name: 'Account Settings', route: 'home' },
    { name: 'Logout', route: 'home' },
];
</script>
