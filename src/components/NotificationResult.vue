<template>
    <div class="w-full">
        <AvatarWithSideText avatar-size="w-11 h-11">
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
                    <template #timestamp>
                        <span>2 days ago</span>
                    </template>
                </StreamingPostTitle>
            </template>
        </AvatarWithSideText>
    </div>
</template>

<script setup>
import Dummy from 'dummyjs';
import { ThumbUpIcon, ChatAlt2Icon } from '@heroicons/vue/outline';
import AvatarWithSideText from './base/AvatarWithSideText.vue';
import StreamingPostTitle from './base/StreamingPostTitle.vue';
</script>
