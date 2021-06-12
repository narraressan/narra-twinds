<template>
    <div class="ntwinds__page bg-gray-200 mb-28">
        <div class="flex flex-col space-y-6 p-10">
            <div class="space-y-2">
                <div>Sizes</div>
                <div class="space-x-5">
                    <button class="btn-xl btn-default">xlarge</button>
                    <button class="btn-lg btn-default">large</button>
                    <button class="btn-md btn-default">base</button>
                    <button class="btn-sm btn-default">small</button>
                    <button class="btn-xs btn-default">xsmall</button>
                </div>
            </div>
            <div class="space-y-2">
                <div>Colors</div>
                <div class="space-x-5">
                    <button class="btn-md btn-default">default</button>
                    <button class="btn-md btn-primary">primary</button>
                    <button class="btn-md btn-danger">danger</button>
                    <button class="btn-md btn-disabled">disabled</button>
                </div>
            </div>
            <div class="space-y-2">
                <div>Icons</div>
                <div class="flex space-x-5">
                    <button class="btn-circle-xl btn-primary">
                        <ChatIcon class="w-6 h-6" />
                    </button>
                    <button class="btn-circle-xl btn-transparent">
                        <XIcon class="w-6 h-6" />
                    </button>
                    <button class="btn-circle-lg btn-danger">
                        <ArrowCircleLeftIcon class="w-6 h-6" />
                    </button>
                    <button class="btn-circle-md btn-default">
                        <ArrowCircleRightIcon class="w-6 h-6" />
                    </button>
                    <button class="btn-circle-sm btn-disabled">
                        <CloudDownloadIcon class="w-6 h-6" />
                    </button>
                    <button class="btn-circle-xs btn-primary">
                        <AnnotationIcon class="w-5 h-5" />
                    </button>
                </div>
                <div class="flex space-x-5">
                    <button class="btn-md btn-primary">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                            <path
                                class="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                        </svg>
                        primary
                    </button>

                    <button class="btn-md btn-primary">
                        <AnnotationIcon class="w-5 h-5 mr-1" />
                        primary
                    </button>

                    <span class="relative inline-flex rounded-md shadow-sm">
                        <button class="btn-md btn-primary">primary</button>
                        <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ChatIcon, ArrowCircleLeftIcon, XIcon } from '@heroicons/vue/solid';
import { AnnotationIcon, ArrowCircleRightIcon, CloudDownloadIcon } from '@heroicons/vue/outline';
</script>
