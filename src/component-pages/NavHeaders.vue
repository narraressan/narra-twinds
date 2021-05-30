<template>
    <div class="ntwinds__page bg-gray-200 mb-28">
        <div class="grid grid-cols-1 gap-y-16">
            <div class="px-6 pt-6">
                <span class="text-md mb-5"> View in compress layout </span>
                <Switch
                    v-model="navCompress"
                    :class="navCompress ? 'bg-gray-900' : 'bg-gray-700'"
                    class="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none"
                >
                    <span :class="navCompress ? 'translate-x-6' : 'translate-x-1'" class="inline-block w-4 h-4 transform bg-white rounded-full" />
                </Switch>
            </div>

            <div class="px-6">
                <div class="text-md mb-5">Simple header (left align)</div>
                <NavHeader class="border-b-2 border-gray-200 bg-white" :compress="navCompress">
                    <template #logo>
                        <img class="h-8 w-8" src="../assets/placeholder/owl.png" alt="logo-here" />
                    </template>
                    <template #left>
                        <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="{ name: item.route }"
                            class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                            :class="{ 'text-indigo-600': item.active }"
                        >
                            {{ item.name }}
                        </router-link>
                    </template>
                    <template #hiddenMenu>
                        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.route }"
                                class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                                :class="{ 'text-indigo-600': item.active }"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </template>
                </NavHeader>
            </div>

            <div class="px-6">
                <div class="text-md mb-5">Simple header (right align)</div>
                <NavHeader class="border-b-2 border-gray-200 bg-white" :compress="navCompress">
                    <template #logo>
                        <img class="h-8 w-8" src="../assets/placeholder/fox.png" alt="logo-here" />
                    </template>
                    <template #right>
                        <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="{ name: item.route }"
                            class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                            :class="{ 'text-indigo-600': item.active }"
                        >
                            {{ item.name }}
                        </router-link>
                    </template>
                    <template #hiddenMenu>
                        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.route }"
                                class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                                :class="{ 'text-indigo-600': item.active }"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </template>
                </NavHeader>
            </div>

            <div class="px-6">
                <div class="text-md mb-5">Header with submenu and icons</div>
                <NavHeader class="border-b-2 border-gray-200 bg-white" :compress="navCompress">
                    <template #logo>
                        <img class="h-8 w-8" src="../assets/placeholder/dog.png" alt="logo-here" />
                    </template>
                    <template #left>
                        <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="{ name: item.route }"
                            class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                            :class="{ 'text-indigo-600': item.active }"
                        >
                            {{ item.name }}
                        </router-link>
                    </template>
                    <template #right>
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
                    <template #hiddenMenu>
                        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.route }"
                                class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                                :class="{ 'text-indigo-600': item.active }"
                            >
                                {{ item.name }}
                            </router-link>
                        </div>
                    </template>
                </NavHeader>
            </div>

            <div class="px-6">
                <div class="text-md mb-5">Packed header (left, right, icons, and submenu)</div>
                <NavHeader class="border-b-2 border-gray-200 bg-white" :compress="navCompress">
                    <template #logo>
                        <img class="h-8 w-8" src="../assets/placeholder/logo.svg" alt="logo-here" />
                    </template>
                    <template #left>
                        <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="{ name: item.route }"
                            class="
                text-gray-600
                hover:text-indigo-600
                hover:bg-gray-100
                rounded-md
                px-3
                py-2
                text-sm
                font-semibold
                cursor-pointer
                focus:outline-none
              "
                            :class="{ 'text-indigo-600 bg-gray-100': item.active }"
                        >
                            {{ item.name }}
                        </router-link>
                        <FloatMenu :menu="submenu">
                            <div
                                class="
                  text-gray-600
                  hover:text-indigo-600
                  hover:bg-gray-100
                  rounded-md
                  px-3
                  py-2
                  text-sm
                  font-semibold
                  cursor-pointer
                  focus:outline-none
                "
                            >
                                Option
                                <ChevronDownIcon class="inline h-4 w-4" />
                            </div>
                        </FloatMenu>
                    </template>
                    <template #right>
                        <input type="text" placeholder="Search" class="bg-gray-100 rounded-full focus:outline-none px-5 py-2 font-normal" />
                    </template>
                    <template #rightExposed>
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
                    <template #hiddenMenu>
                        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div class="px-3 py-2">
                                <input type="text" placeholder="Search" class="bg-gray-100 rounded-full focus:outline-none px-5 py-2 w-full" />
                            </div>
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.route }"
                                class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                                :class="{ 'text-indigo-600': item.active }"
                            >
                                {{ item.name }}
                            </router-link>
                            <Disclosure v-slot="{ open }" as="nav" class="bg-white">
                                <DisclosureButton class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold cursor-pointer focus:outline-none">
                                    Submenu
                                </DisclosureButton>
                                <transition name="ntwinds__transition__slidedown">
                                    <DisclosurePanel class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-100">
                                        <router-link
                                            v-for="menu in submenu"
                                            :key="menu.name"
                                            :to="{ name: 'home' }"
                                            class="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-semibold"
                                        >
                                            {{ menu.name }}
                                        </router-link>
                                    </DisclosurePanel>
                                </transition>
                            </Disclosure>
                        </div>
                    </template>
                </NavHeader>
            </div>

            <div class="px-6">
                <div class="text-md mb-5">Packed header (NOT a dark theme, just dark)</div>
                <NavHeader class="border-b-2 border-gray-200 bg-gray-800" :compress="navCompress">
                    <template #logo>
                        <img class="h-8 w-8" src="../assets/placeholder/slack.png" alt="logo-here" />
                    </template>
                    <template #left>
                        <router-link
                            v-for="item in navigation"
                            :key="item.name"
                            :to="{ name: item.route }"
                            class="text-gray-200 hover:text-white hover:bg-black rounded-md px-3 py-2 text-sm font-medium"
                            :class="{ 'text-white bg-black': item.active }"
                        >
                            {{ item.name }}
                        </router-link>
                        <FloatMenu :menu="submenu">
                            <div class="text-gray-200 hover:text-white hover:bg-black rounded-md px-3 py-2 text-sm font-medium">
                                Option
                                <ChevronDownIcon class="inline h-4 w-4" />
                            </div>
                        </FloatMenu>
                    </template>
                    <template #right>
                        <input type="text" placeholder="Search" class="bg-white rounded-full focus:outline-none px-5 py-2" />
                    </template>
                    <template #rightExposed>
                        <button class="relative p-1 focus:outline-none text-gray-200">
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
                    <template #hiddenMenu>
                        <div class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <div class="px-3 py-2">
                                <input type="text" placeholder="Search" class="bg-white rounded-full focus:outline-none px-5 py-2 w-full" />
                            </div>
                            <router-link
                                v-for="item in navigation"
                                :key="item.name"
                                :to="{ name: item.route }"
                                class="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium"
                                :class="{ 'text-white': item.active }"
                            >
                                {{ item.name }}
                            </router-link>
                            <Disclosure v-slot="{ open }" as="nav" class="bg-white">
                                <div class="bg-gray-800">
                                    <DisclosureButton class="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium cursor-pointer focus:outline-none">
                                        Submenu
                                    </DisclosureButton>
                                </div>
                                <transition name="ntwinds__transition__slidedown">
                                    <DisclosurePanel class="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-700">
                                        <router-link
                                            v-for="menu in submenu"
                                            :key="menu.name"
                                            :to="{ name: 'home' }"
                                            class="text-gray-200 hover:text-white px-3 py-2 text-sm font-medium"
                                        >
                                            {{ menu.name }}
                                        </router-link>
                                    </DisclosurePanel>
                                </transition>
                            </Disclosure>
                        </div>
                    </template>
                    <template #menuToggle="{ open }">
                        <DisclosureButton v-if="!slots?.menuToggle" class="flex items-center justify-center focus:outline-none md:hidden ml-5 text-gray-200">
                            <MenuIcon v-if="!open" class="block h-6 w-6" />
                            <XIcon v-else class="block h-6 w-6" />
                        </DisclosureButton>
                    </template>
                </NavHeader>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline';

import NavHeader from '../components/NavHeader.vue';
import FloatMenu from '../components/FloatMenu.vue';

const navCompress = ref(false);

const navigation = [
    { name: 'Dashboard', route: 'home', active: false },
    { name: 'Team', route: 'home', active: true },
    { name: 'Studio', route: 'home', active: false },
];

const submenu = [
    { name: 'Profile', route: 'home' },
    { name: 'Settings', route: 'home' },
    { name: 'Account', route: 'home' },
];
</script>
