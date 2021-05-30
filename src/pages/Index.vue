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
                </li>
            </ul>
        </div>
        <div class="px-9">
            <div class="text-lg">Pages</div>
            <ul class="list-disc pl-7">
                <li v-for="page in pages" :key="page.name">
                    <router-link :to="{ name: page.name }">
                        {{ page.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const layout = ref([
    {
        name: 'CompressLayout',
        title: 'Compress page layout',
    },
    {
        name: 'WideLayout',
        title: 'Wide page layout',
    },
    {
        name: 'FullLayout',
        title: 'Full page layout',
    },
]);

const componentPages = ref([
    {
        name: 'NavHeaders',
        title: 'Navigation bars',
    },
    {
        name: 'Typography',
        title: 'Typography',
    },
]);

const pages = ref([
    {
        name: 'SocmedHomepage',
        title: 'Socmed Homepage',
    },
    {
        name: 'CategoriesPage',
        title: 'Categories',
    },
    {
        name: 'LiveStreamPage',
        title: 'Live Stream',
    },
    {
        name: 'Error500',
        title: 'Error 500',
    },
    {
        name: 'Error404',
        title: 'Error 404',
    },
]);
</script>
