import Index from '../pages/Index.vue';

import CompressLayout from '../layouts/CompressLayout.vue';
import FullLayout from '../layouts/FullLayout.vue';
import WideLayout from '../layouts/WideLayout.vue';

import NavHeaders from '../component-pages/NavHeaders.vue';
import Typography from '../component-pages/Typography.vue';
import Buttons from '../component-pages/Buttons.vue';
import InputFields from '../component-pages/InputFields.vue';
import AlertMessages from '../component-pages/AlertMessages.vue';

import SocmedHomepage from '../pages/SocmedHomePage.vue';
import PrivateLivestream from '../pages/PrivateLivestreamStudio.vue';
import PublicLivestream from '../pages/PublicLivestreamStudio.vue';
import Categories from '../pages/Categories.vue';
import LiveNow from '../pages/LiveNow.vue';
import Error500 from '../pages/500.vue';
import Error404 from '../pages/404.vue';
import SignIn from '../pages/SignIn.vue';
import SignUp from '../pages/SignUp.vue';
import ResetPassword from '../pages/ResetPassword.vue';
import GetConfirmationCode from '../pages/GetConfirmationCode.vue';
import PrivateProfile from '../pages/PrivateProfilePage.vue';
import PublicProfile from '../pages/PublicProfilePage.vue';
import SearchResults from '../pages/SearchResults.vue';
import Notifications from '../pages/Notifications.vue';
import AccountSettings from '../pages/AccountSettings.vue';
import PrivacyPolicy from '../pages/PrivacyPolicy.vue';
import TermsOfService from '../pages/TermsOfService.vue';

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
        path: '/buttons',
        name: 'Buttons',
        component: Buttons,
    },
    {
        path: '/input-fields',
        name: 'InputFields',
        component: InputFields,
    },
    {
        path: '/alert-messages',
        name: 'AlertMessages',
        component: AlertMessages,
    },
    {
        path: '/socmed-home',
        name: 'SocmedHomepage',
        component: SocmedHomepage,
    },
    {
        path: '/my-studio',
        name: 'PrivateLivestreamPage',
        component: PrivateLivestream,
    },
    {
        path: '/public-livestream',
        name: 'PublicLivestreamPage',
        component: PublicLivestream,
    },
    {
        path: '/categories',
        name: 'CategoriesPage',
        component: Categories,
    },
    {
        path: '/live/:categoryId',
        name: 'LiveNowPage',
        component: LiveNow,
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
        path: '/sign-in',
        name: 'SignIn',
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        component: SignUp,
    },
    {
        path: '/reset-password',
        name: 'ResetPassword',
        component: ResetPassword,
    },
    {
        path: '/get-confirmation-code',
        name: 'GetConfirmationCode',
        component: GetConfirmationCode,
    },
    {
        path: '/private-profile',
        name: 'PrivateProfile',
        component: PrivateProfile,
    },
    {
        path: '/public-profile',
        name: 'PublicProfile',
        component: PublicProfile,
    },
    {
        path: '/search-results',
        name: 'SearchResults',
        component: SearchResults,
    },
    {
        path: '/notifications',
        name: 'Notifications',
        component: Notifications,
    },
    {
        path: '/account-settings',
        name: 'AccountSettings',
        component: AccountSettings,
    },
    {
        path: '/privacy-policy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
    },
    {
        path: '/terms-of-service',
        name: 'TermsOfService',
        component: TermsOfService,
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '/', // redirect back to home
    },
];
