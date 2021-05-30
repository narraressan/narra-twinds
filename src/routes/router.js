import Index from '../pages/Index.vue';

import CompressLayout from '../layouts/CompressLayout.vue';
import FullLayout from '../layouts/FullLayout.vue';
import WideLayout from '../layouts/WideLayout.vue';

import NavHeaders from '../component-pages/NavHeaders.vue';
import Typography from '../component-pages/Typography.vue';

import SocmedHomepage from '../pages/SocmedHomePage.vue';
import LiveStream from '../pages/LiveStreamPage.vue';
import CategoriesPage from '../pages/CategoriesPage.vue';
import Error500 from '../pages/500.vue';
import Error404 from '../pages/404.vue';

export default [
    {
        path: '/',
        name: 'home',
        component: Index,
    },
    {
        path: '/compress-page',
        name: 'CompressLayout',
        component: CompressLayout,
    },
    {
        path: '/full-page',
        name: 'FullLayout',
        component: FullLayout,
    },
    {
        path: '/wide-page',
        name: 'WideLayout',
        component: WideLayout,
    },
    {
        path: '/navs',
        name: 'NavHeaders',
        component: NavHeaders,
    },
    {
        path: '/typography',
        name: 'Typography',
        component: Typography,
    },
    {
        path: '/socmed-home',
        name: 'SocmedHomepage',
        component: SocmedHomepage,
    },
    {
        path: '/livestream',
        name: 'LiveStreamPage',
        component: LiveStream,
    },
    {
        path: '/categories',
        name: 'CategoriesPage',
        component: CategoriesPage,
    },
    {
        path: '/500',
        name: 'Error500',
        component: Error500,
    },
    {
        path: '/404',
        name: 'Error404',
        component: Error404,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/', // redirect back to home
    },
];
