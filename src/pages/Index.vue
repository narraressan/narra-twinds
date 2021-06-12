<template>
    <div class="container mx-auto px-5 space-y-5">
        <h1 class="text-2xl mt-12">
            Welcome to
            <span class="font-bold">narra-twinds</span>
        </h1>
        <div class="px-9">
            <div class="text-lg">Layouts</div>
            <ul class="list-disc pl-7">
                <li v-for="page in layout" :key="page.name">
                    <router-link :to="{ name: page.name }">
                        {{ page.title }}
                    </router-link>
                    <CheckCircleIcon v-if="page.status == status.DONE" class="mx-2 inline text-green-500 w-5 w-5" />
                    <RefreshIcon v-if="page.status == status.IN_PROGRESS" class="mx-2 inline text-blue-500 w-5 w-5 animate-spin" />
                    <LockClosedIcon v-if="page.status == status.OPEN" class="mx-2 inline text-red-500 w-5 w-5" />
                </li>
            </ul>
        </div>
        <div class="px-9">
            <div class="text-lg font-sans">Components</div>
            <ul class="list-disc pl-7">
                <li v-for="page in componentPages" :key="page.name">
                    <router-link :to="{ name: page.name }">
                        {{ page.title }}
                    </router-link>
                    <CheckCircleIcon v-if="page.status == status.DONE" class="mx-2 inline text-green-500 w-5 w-5" />
                    <RefreshIcon v-if="page.status == status.IN_PROGRESS" class="mx-2 inline text-blue-500 w-5 w-5 animate-spin" />
                    <LockClosedIcon v-if="page.status == status.OPEN" class="mx-2 inline text-red-500 w-5 w-5" />
                </li>
            </ul>
        </div>
        <div class="px-9">
            <div class="text-lg">Pages</div>
            <ul class="list-disc pl-7">
                <li v-for="page in pages" :key="page.name">
                    <router-link :to="{ name: page.name, params: { ...page?.params } }">
                        {{ page.title }}
                    </router-link>
                    <CheckCircleIcon v-if="page.status == status.DONE" class="mx-2 inline text-green-500 w-5 w-5" />
                    <RefreshIcon v-if="page.status == status.IN_PROGRESS" class="mx-2 inline text-blue-500 w-5 w-5 animate-spin" />
                    <LockClosedIcon v-if="page.status == status.OPEN" class="mx-2 inline text-red-500 w-5 w-5" />
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { CheckCircleIcon, RefreshIcon, LockClosedIcon } from '@heroicons/vue/outline';

const status = Object.freeze({
    DONE: 'DONE',
    IN_PROGRESS: 'IN_PROGRESS',
    OPEN: 'OPEN',
});

const layout = ref([
    {
        name: 'CompressLayout',
        title: 'Compress page layout',
        status: status.DONE,
    },
    {
        name: 'WideLayout',
        title: 'Wide page layout',
        status: status.DONE,
    },
    {
        name: 'FullLayout',
        title: 'Full page layout',
        status: status.DONE,
    },
]);

const componentPages = ref([
    {
        name: 'NavHeaders',
        title: 'Navigation bars',
        status: status.DONE,
    },
    {
        name: 'Typography',
        title: 'Typography',
        status: status.DONE,
    },
    {
        name: 'Buttons',
        title: 'Buttons',
        status: status.DONE,
    },
    {
        name: 'InputFields',
        title: 'Input Fields',
        status: status.IN_PROGRESS,
    },
    {
        name: 'AlertMessages',
        title: 'Alert Messages',
        status: status.IN_PROGRESS,
    },
]);

const pages = ref([
    {
        name: 'SocmedHomepage',
        title: 'Socmed Homepage',
        status: status.DONE,
    },
    {
        name: 'CategoriesPage',
        title: 'Categories',
        status: status.DONE,
    },
    {
        name: 'LiveNowPage',
        params: { categoryId: Math.random() },
        title: 'LiveNow',
        status: status.DONE,
    },
    {
        name: 'PrivateLivestreamPage',
        title: 'Private Livestream Studio',
        status: status.DONE,
    },
    {
        name: 'PublicLivestreamPage',
        title: 'Public Livestream Studio',
        status: status.DONE,
    },
    {
        name: 'Error500',
        title: 'Error 500',
        status: status.DONE,
    },
    {
        name: 'Error404',
        title: 'Error 404',
        status: status.DONE,
    },

    {
        name: 'SignIn',
        title: 'Sign In',
        status: status.DONE,
    },
    {
        name: 'SignUp',
        title: 'Sign Up',
        status: status.DONE,
    },
    {
        name: 'ResetPassword',
        title: 'Reset Password',
        status: status.DONE,
    },
    {
        name: 'GetConfirmationCode',
        title: 'Get Confirmation Code',
        status: status.DONE,
    },
    {
        name: 'PrivateProfile',
        title: 'Private Profile',
        status: status.OPEN,
    },
    {
        name: 'PublicProfile',
        title: 'Public Profile',
        status: status.OPEN,
    },
    {
        name: 'SearchResults',
        title: 'Search Results',
        status: status.OPEN,
    },
    {
        name: 'Notifications',
        title: 'Notifications',
        status: status.OPEN,
    },
    {
        name: 'AccountSettings',
        title: 'Account Settings',
        status: status.OPEN,
    },
    {
        name: 'PrivacyPolicy',
        title: 'Privacy Policy',
        status: status.OPEN,
    },
    {
        name: 'TermsOfService',
        title: 'Terms of Services',
        status: status.OPEN,
    },
]);
</script>
