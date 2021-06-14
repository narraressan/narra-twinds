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
                    <button class="btn-md btn-default" @click="alertMessage">notify</button>
                </div>
            </div>

            <div class="space-y-2">
                <div>Actionable Confirmations</div>
                <div class="space-y-5">
                    <button class="btn-md btn-default" @click="openModal">modal</button>
                    <TransitionRoot appear :show="isOpen" as="template">
                        <Dialog as="div" @close="closeModal">
                            <div class="fixed inset-0 z-10 overflow-y-auto">
                                <div class="min-h-screen px-4 text-center">
                                    <TransitionChild
                                        as="template"
                                        enter="duration-300 ease-out"
                                        enter-from="opacity-0"
                                        enter-to="opacity-100"
                                        leave="duration-200 ease-in"
                                        leave-from="opacity-100"
                                        leave-to="opacity-0"
                                    >
                                        <DialogOverlay class="fixed inset-0" />
                                    </TransitionChild>

                                    <span class="inline-block h-screen align-middle" aria-hidden="true"> &#8203; </span>

                                    <TransitionChild
                                        as="template"
                                        enter="duration-300 ease-out"
                                        enter-from="opacity-0 scale-95"
                                        enter-to="opacity-100 scale-100"
                                        leave="duration-200 ease-in"
                                        leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95"
                                    >
                                        <div
                                            class="
                        inline-block
                        w-full
                        max-w-md
                        p-6
                        my-8
                        overflow-hidden
                        text-left
                        align-middle
                        transition-all
                        transform
                        bg-white
                        shadow-xl
                        rounded-2xl
                      "
                                        >
                                            <h3 class="text-lg font-medium leading-6 text-gray-900">Payment successful</h3>
                                            <div class="mt-2">
                                                <p class="text-sm text-gray-500">
                                                    Your payment has been successfully submitted. We’ve sent your an email with all of the details of your order.
                                                </p>
                                            </div>

                                            <div class="mt-4">
                                                <button
                                                    type="button"
                                                    class="
                            inline-flex
                            justify-center
                            px-4
                            py-2
                            text-sm
                            font-medium
                            text-blue-900
                            bg-blue-100
                            border border-transparent
                            rounded-md
                            hover:bg-blue-200
                            focus:outline-none
                            focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500
                          "
                                                    @click="closeModal"
                                                >
                                                    Got it, thanks!
                                                </button>
                                            </div>
                                        </div>
                                    </TransitionChild>
                                </div>
                            </div>
                        </Dialog>
                    </TransitionRoot>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, getCurrentInstance } from 'vue';
import { XIcon } from '@heroicons/vue/solid';
import { TransitionRoot, TransitionChild, Dialog, DialogOverlay } from '@headlessui/vue';
import vueApp from '../app';
import Dummy from 'dummyjs';

const { ctx } = getCurrentInstance();

isOpen = false;

const closeModal = () => {
    isOpen.value = false;
};

const openModal = () => {
    isOpen.value = true;
};

const alertMessage = () => {
    ctx.vueApp.$toast.info('My toast content', { duration: false });
};
</script>
