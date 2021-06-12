<template>
    <Menu as="div" class="relative">
        <MenuButton class="flex focus:outline-none">
            <slot></slot>
        </MenuButton>
        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
        >
            <MenuItems
                class="z-10 absolute mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                :class="alignment[position.toUpperCase()]"
            >
                <MenuItem v-for="link in menu" v-slot="{ active }" :key="link?.name">
                    <router-link :to="{ name: link?.route }" class="block px-4 py-2 text-sm text-gray-700" :class="{ 'bg-gray-100': active }">
                        {{ link?.name }}
                    </router-link>
                </MenuItem>
            </MenuItems>
        </transition>
    </Menu>
</template>

<script setup>
import { defineProps, toRefs } from 'vue';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

const props = defineProps({
    menu: {
        type: Array,
        default: () => [],
    },
    position: {
        type: String,
        default: 'left',
    },
});

const alignment = Object.freeze({
    RIGHT: 'right-0',
    LEFT: 'left-0',
});

const { menu } = toRefs(props);
</script>
