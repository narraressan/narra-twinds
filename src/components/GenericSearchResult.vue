<template>
    <div class="w-full p-4 rounded-lg border border-gray-50 shadow">
        <AvatarWithSideText avatar-size="w-11 h-11" class="mb-2">
            <template #thumbnail>
                <img :src="`https://placeimg.com/500/480/any?_${Math.random()}`" alt="profile-pic" />
            </template>
            <template #details>
                <StreamingPostTitle>
                    <template #username>
                        {{ Dummy.text(1, 6) }}
                    </template>
                    <template #title>
                        {{ Dummy.text(6, 20) }}
                    </template>
                </StreamingPostTitle>
            </template>
        </AvatarWithSideText>
        <p v-snip:js="3" class="text-sm">
            {{ Dummy.text(13, 150) }}
        </p>
        <div class="flex justify-between mt-6 pt-3 border-t-1">
            <div class="flex text-xs text-gray-500 font-medium items-center">1.5 hrs ago</div>
            <div class="flex space-x-3 items-center text-xs font-semibold text-gray-700">
                <div class="flex items-center space-x-1.5">
                    <div>13.4K</div>
                    <div class="bg-gray-200 rounded-full w-6 h-6 p-1">
                        <ThumbUpIcon class="w-full h-full" />
                    </div>
                </div>
                <div class="flex items-center space-x-1.5">
                    <div>18.4M</div>
                    <div class="bg-gray-200 rounded-full w-6 h-6 p-1">
                        <ChatAlt2Icon class="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Dummy from 'dummyjs';
import { ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/outline';
import AvatarWithSideText from './base/AvatarWithSideText.vue';
import StreamingPostTitle from './base/StreamingPostTitle.vue';
</script>
