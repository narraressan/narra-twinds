<template>
    <div class="flex flex-col">
        <div class="font-semibold mb-6 text-xl">Privacy Settings</div>
        <div class="w-full space-y-4">
            <div class="flex space-x-4">
                <Switch
                    v-model="setAccountToPrivate"
                    :class="setAccountToPrivate ? 'bg-green-600' : 'bg-gray-700'"
                    class="relative inline-flex items-center h-4 rounded-full w-9 focus:outline-none shadow mt-1"
                >
                    <span
                        :class="setAccountToPrivate ? 'translate-x-5' : 'translate-x-0'"
                        class="inline-block w-4 h-4 transform bg-white rounded-full shadow"
                    />
                </Switch>
                <div class="flex-grow">
                    Set account to private
                    <div class="text-xs">Your account will be visible to you and other streamers cannot follow and view your profile page.</div>
                </div>
            </div>
            <div class="flex space-x-4">
                <Switch
                    v-model="makeFollowersPrivate"
                    :class="makeFollowersPrivate ? 'bg-green-600' : 'bg-gray-700'"
                    class="relative inline-flex items-center h-4 rounded-full w-9 focus:outline-none shadow mt-1"
                >
                    <span
                        :class="makeFollowersPrivate ? 'translate-x-5' : 'translate-x-0'"
                        class="inline-block w-4 h-4 transform bg-white rounded-full shadow"
                    />
                </Switch>
                <div class="flex-grow">
                    Make Followers private
                    <div class="text-xs">Your followers you will NOT be visible to anyone</div>
                </div>
            </div>
            <div class="flex space-x-4">
                <Switch
                    v-model="makeFollowingsPrivate"
                    :class="makeFollowingsPrivate ? 'bg-green-600' : 'bg-gray-700'"
                    class="relative inline-flex items-center h-4 rounded-full w-9 focus:outline-none shadow mt-1"
                >
                    <span
                        :class="makeFollowingsPrivate ? 'translate-x-5' : 'translate-x-0'"
                        class="inline-block w-4 h-4 transform bg-white rounded-full shadow"
                    />
                </Switch>
                <div class="flex-grow">
                    Make Followings private
                    <div class="text-xs">Streamers you follow will NOT be visible to anyone.</div>
                </div>
            </div>
            <div class="flex space-x-4">
                <Switch
                    v-model="deactivateAccount"
                    :class="deactivateAccount ? 'bg-green-600' : 'bg-gray-700'"
                    class="relative inline-flex items-center h-4 rounded-full w-9 focus:outline-none shadow mt-1"
                >
                    <span :class="deactivateAccount ? 'translate-x-5' : 'translate-x-0'" class="inline-block w-4 h-4 transform bg-white rounded-full shadow" />
                </Switch>
                <div class="flex-grow">
                    Deactivate Account
                    <div class="text-xs">Your account will be deactivated and data will be purged in 30 days.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Switch } from '@headlessui/vue';
import { nextTick } from '@vue/runtime-core';

setAccountToPrivate = false;
makeFollowersPrivate = false;
makeFollowingsPrivate = false;
deactivateAccount = false;
</script>
