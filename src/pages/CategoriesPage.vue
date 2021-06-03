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
                    <Sidebar />
                </div>
                <div class="flex-grow">
                    <div class="flex flex-col space-y-3 pb-5">
                        <div class="h-60 flex items-center p-5 ntwinds__categories_banner">
                            <div class="flex flex-col">
                                <div class="text-xxxl font-semibold">Stream with us now</div>
                                <div>{{ Dummy.text(10, 20) }}</div>
                            </div>
                        </div>
                        <div class="flex space-x-3">
                            <div class="flex-grow flex flex-col">
                                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                    <CategoryCard v-for="idx of 7" :key="idx" :category-image="`https://placeimg.com/640/480/any?_${Math.random()}`">
                                        <template #title>
                                            {{ Dummy.text(3, 10) }}
                                        </template>
                                        <template #details>
                                            <div class="flex">
                                                <div class="font-semibold mr-1">1.5B</div>
                                                <div class="text-gray-500">Followers</div>
                                            </div>
                                            <div class="flex">
                                                <div class="font-semibold mr-1">234.6K</div>
                                                <div class="text-gray-500">Streamers</div>
                                            </div>
                                        </template>
                                    </CategoryCard>
                                </div>
                                <div class="flex flex-col">
                                    <div class="mt-16 mb-8">
                                        <div class="text-xxxl font-semibold">E-Sports Replay and Highlights</div>
                                        <div>{{ Dummy.text(10, 20) }}</div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                        <CategoryCard v-for="idx of 13" :key="idx" :category-image="`https://placeimg.com/640/480/any?_${Math.random()}`">
                                            <template #title>
                                                {{ Dummy.text(3, 10) }}
                                            </template>
                                            <template #details>
                                                <div class="flex">
                                                    <div class="font-semibold mr-1">1.5B</div>
                                                    <div class="text-gray-500">Followers</div>
                                                </div>
                                                <div class="flex">
                                                    <div class="font-semibold mr-1">234.6K</div>
                                                    <div class="text-gray-500">Streamers</div>
                                                </div>
                                            </template>
                                        </CategoryCard>
                                    </div>
                                </div>
                            </div>
                            <div class="ntwinds__adbar hidden lg:block">
                                <Adbar class="py-0" />
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
import Dummy from 'dummyjs';

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';
import Sidebar from '../components/Sidebar.vue';
import Adbar from '../components/Adbar.vue';
import CategoryCard from '../components/CategoryCard.vue';

const submenu = [
    { name: 'Register', route: 'home' },
    { name: 'Sign In', route: 'home' },
    { name: 'Forgot Password', route: 'home' },
    { name: 'Verify Account', route: 'home' },
];
</script>
