import 'virtual:windi.css';

import app from './app';
import VueSnip from 'vue-snip';
import Toaster from '@meforma/vue-toaster';

import router from './routes';

app.use(VueSnip);
app.use(Toaster);
app.use(router);

app.mount('#app');
