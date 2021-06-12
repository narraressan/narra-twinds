<template>
    <div class="ntwinds__page bg-gray-200 mb-28">
        <div class="flex flex-col space-y-6 p-10">
            <div class="space-y-2">
                <div>Message</div>
                <div class="space-y-5">
                    <div class="alert-success">
                        <XIcon class="absolute right-5 w-5 h-5 cursor-pointer" />
                        <div class="text-lg font-medium">
                            {{ Dummy.text(3, 10) }}
                        </div>
                        <div class="text-sm">
                            {{ Dummy.text(20, 50) }}
                        </div>
                    </div>
                    <div class="alert-failed">
                        <XIcon class="absolute right-5 w-5 h-5 cursor-pointer" />
                        <div class="text-lg font-medium">
                            {{ Dummy.text(3, 10) }}
                        </div>
                        <div class="text-sm">
                            {{ Dummy.text(20, 50) }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-2">
                <div>Notification</div>
                <div class="space-y-5">
                    <!-- TODO: popup notifications -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { XIcon } from '@heroicons/vue/solid';
import Dummy from 'dummyjs';
</script>
