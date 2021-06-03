<template>
    <Disclosure v-slot="{ open }" as="nav" class="z-10">
        <div :class="container" class="px-5 xl:px-0">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a class="flex-shrink-0 mr-10" href="javascript:;">
                        <slot name="logo" />
                    </a>
                    <div class="hidden md:flex items-center space-x-3">
                        <slot name="left" />
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="hidden md:flex items-center space-x-3 mr-3">
                        <slot name="right" />
                    </div>
                    <div class="flex items-center space-x-3">
                        <slot name="rightExposed" />
                    </div>
                    <slot name="menuToggle" :open="open" />
                    <DisclosureButton v-if="!slots?.menuToggle && slots?.hiddenMenu" class="flex items-center justify-center focus:outline-none md:hidden ml-5">
                        <MenuIcon v-if="!open" class="block h-6 w-6" />
                        <XIcon v-else class="block h-6 w-6" />
                    </DisclosureButton>
                </div>
            </div>
        </div>

        <transition name="ntwinds__transition__slidedown">
            <DisclosurePanel class="md:hidden">
                <slot name="hiddenMenu" />
            </DisclosurePanel>
        </transition>
    </Disclosure>
</template>

<script setup>
import { defineProps, useContext, computed, ref, toRefs } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { MenuIcon, XIcon } from '@heroicons/vue/outline';

const props = defineProps({
    compress: {
        type: Boolean,
        default: true,
    },
});

const { slots } = useContext();

const { compress: isCompress } = toRefs(props);

const container = computed(() => {
    return !isCompress.value ? 'ntwinds__wide_layout' : 'ntwinds__compress_layout';
});

const open = ref(false);
</script>
