<template>
    <div class="ntwinds__streampost">
        <AvatarWithSideText avatar-size="w-14 h-14" class="mb-6">
            <template #thumbnail>
                <img :src="avatar" alt="profile-pic" />
            </template>
            <template #details>
                <StreamingPostTitle>
                    <template #username>
                        {{ Dummy.text(1, 6) }}
                    </template>
                    <template #title>
                        {{ Dummy.text(6, 20) }}
                    </template>
                    <template #timestamp>
                        <span>Started 1.5 hrs ago</span>
                    </template>
                </StreamingPostTitle>
                <p v-snip:js="3" class="text-sm">
                    {{ Dummy.text(13, 150) }}
                </p>
            </template>
        </AvatarWithSideText>

        <div class="flex">
            <div class="ntwinds__streampost__controls pr-3 space-y-3">
                <div class="space-y-2 text-center">
                    <button class="btn-circle-sm btn-primary">
                        <PlusIcon class="w-5 h-5" />
                    </button>
                    <div class="text-xs font-semibold">Follow</div>
                </div>
                <div class="space-y-2 text-center">
                    <button class="btn-circle-sm btn-primary">
                        <ThumbUpIcon class="w-5 h-5" />
                    </button>
                    <div class="text-xs font-semibold">1.5k</div>
                </div>
                <div class="space-y-2 text-center">
                    <button class="btn-circle-sm btn-primary">
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
import { defineProps, toRefs } from 'vue';
import { PlusIcon, ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/outline';
import Dummy from 'dummyjs';

import VideoPreview from './VideoPreview.vue';
import AvatarWithSideText from './base/AvatarWithSideText.vue';
import StreamingPostTitle from './base/StreamingPostTitle.vue';

const props = defineProps({
    avatar: {
        type: String,
        default: null,
    },
});

const { avatar } = toRefs(props);
</script>
