<template>
    <div class="ntwinds__sidebar__container flex flex-col space-y-6 py-5">
        <div class="flex flex-col">
            <div class="flex items-center p-2 cursor-pointer text-xxl font-semibold" :class="{ 'font-bold bg-gray-100 rounded': isLiveNowActive }">
                <DesktopComputerIcon class="w-7 h-7 mr-2" />
                <router-link :to="{ name: 'home' }" class="flex-grow">LIVE NOW</router-link>
            </div>
            <div class="flex items-center p-2 cursor-pointer text-xxl font-semibold" :class="{ 'font-bold bg-gray-100 rounded': isStreamLobbyActive }">
                <CubeIcon class="w-7 h-7 mr-2" />
                <router-link :to="{ name: 'home' }" class="flex-grow">STREAM LOBBY</router-link>
            </div>
        </div>
        <div class="flex flex-col space-y-2">
            <div class="text-sm font-semibold">Recommended</div>
            <MiniUserCard v-for="idx of 8" :key="idx" :avatar="`https://placeimg.com/640/480/any?_${Math.random()}`">
                <template #title>
                    {{ Dummy.text() }}
                </template>
                <template #details>
                    <div class="font-semibold mr-1">1.5B</div>
                    <div class="text-gray-500">Followers</div>
                </template>
            </MiniUserCard>
            <Disclosure v-slot="{ open }">
                <!-- Use the built-in <transition> component to add transitions. -->
                <transition
                    enter-active-class="transition duration-100 ease-out"
                    enter-from-class="transform scale-95 opacity-0"
                    enter-to-class="transform scale-100 opacity-100"
                    leave-active-class="transition duration-75 ease-out"
                    leave-from-class="transform scale-100 opacity-100"
                    leave-to-class="transform scale-95 opacity-0"
                >
                    <DisclosurePanel>
                        <MiniUserCard v-for="idx of 8" :key="idx" :avatar="`https://placeimg.com/640/480/any?_${Math.random()}`">
                            <template #title>
                                {{ Dummy.text() }}
                            </template>
                            <template #details>
                                <div class="font-semibold mr-1">1.5B</div>
                                <div class="text-gray-500">Followers</div>
                            </template>
                        </MiniUserCard>
                    </DisclosurePanel>
                </transition>
                <DisclosureButton class="focus:outline-none mx-auto">
                    <div class="flex items-center">
                        <span class="font-semibold text-sm text-gray-800">Show more</span>
                        <ChevronDownIcon :class="{ 'transform rotate-180': open }" class="w-5 h-5" />
                    </div>
                </DisclosureButton>
            </Disclosure>
        </div>
        <div class="flex flex-col text-xs font-medium text-gray-600 space-y-2">
            <router-link :to="{ name: 'home' }">Contact Us</router-link>
            <router-link :to="{ name: 'home' }">Terms and Conditions</router-link>
            <router-link :to="{ name: 'home' }">Guidelines and Copyright</router-link>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, ref, toRefs } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon, DesktopComputerIcon, CubeIcon } from '@heroicons/vue/solid';
import Dummy from 'dummyjs';

import MiniUserCard from './MiniUserCard.vue';

const props = defineProps({
    isLiveNowActive: {
        type: Boolean,
        default: false,
    },
    isStreamLobbyActive: {
        type: Boolean,
        default: false,
    },
});

const { isLiveNowActive, isStreamLobbyActive } = toRefs(props);

const open = ref(false);
</script>
