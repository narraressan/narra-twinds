<template>
    <div class="ntwinds__full_layout h-screen">
        <div class="ntwinds__livestream">
            <div class="ntwinds__livestream__player">
                <div class="absolute top-5 left-5 z-1">
                    <button class="btn-circle-xl btn-transparent">
                        <XIcon class="w-9 h-9" />
                    </button>
                </div>
                <div class="ntwinds__videoplayer">
                    <iframe src="http://www.youtube.com/embed/n_dZNLr2cME?rel=0&hd=1" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
            <div class="ntwinds__livestream__activities">
                <MyLivestreamActivityPanel :avatar="`https://placeimg.com/500/480/any?_${Math.random()}`"> </MyLivestreamActivityPanel>
            </div>
        </div>
    </div>
</template>

<script setup>
import MyLivestreamActivityPanel from '../components/MyLivestreamActivityPanel.vue';
import { XIcon } from '@heroicons/vue/solid';
</script>
