<template>
    <div class="ntwinds__streampost">
        <div class="flex">
            <div class="pr-3 flex-none">
                <div class="h-14 w-14 rounded-full bg-black">
                    <img class="h-14 w-14 rounded-full" :src="`https://placeimg.com/640/480/any?_${Math.random()}`" alt="profile-pic" />
                </div>
            </div>
            <div class="flex flex-col ntwinds__streampost__text pb-6">
                <p class="font-semibold truncate">
                    {{ Dummy.text() }}
                </p>
                <div>
                    <p v-snip:js="3" class="text-sm">
                        {{ Dummy.text(13, 150) }}
                    </p>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="ntwinds__streampost__controls pr-3 space-y-3">
                <div class="space-y-2 text-center">
                    <button class="btn-circle btn-circle-sm btn-primary">
                        <PlusIcon class="w-5 h-5" />
                    </button>
                    <div class="text-xs font-semibold">Follow</div>
                </div>
                <div class="space-y-2 text-center">
                    <button class="btn-circle btn-circle-sm btn-primary">
                        <ThumbUpIcon class="w-5 h-5" />
                    </button>
                    <div class="text-xs font-semibold">1.5k</div>
                </div>
                <div class="space-y-2 text-center">
                    <button class="btn-circle btn-circle-sm btn-primary">
                        <ChatAlt2Icon class="w-5 h-5" />
                    </button>
                    <div class="text-xs font-semibold">34.5M</div>
                </div>
            </div>
            <div class="ntwinds__streampost__preview">
                <VideoPreview :is-live="true" :views="'3.4M'" :preview-image="`https://placeimg.com/640/800/any?_${Math.random()}`" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { PlusIcon, ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import VideoPreview from './VideoPreview.vue';
</script>
