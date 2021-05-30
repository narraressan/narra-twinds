import 'virtual:windi.css';

import app from './app';
import VueSnip from 'vue-snip';

import router from './routes';

app.use(VueSnip);
app.use(router);

app.mount('#app');
