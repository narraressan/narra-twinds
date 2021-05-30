import { createRouter, createWebHashHistory } from 'vue-router';
import router from './router';

export default createRouter({
    history: createWebHashHistory(),
    routes: [...router],
});
