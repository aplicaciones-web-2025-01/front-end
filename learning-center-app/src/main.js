import {createApp} from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from '@primeuix/themes/lara';
import Button from "primevue/button"
import 'primeflex/primeflex.css'

import Paginator from 'primevue/paginator';


const app = createApp(App);

app.use(PrimeVue,
    {
        theme: {
            preset: Lara
        }
    });

app.component('pv-button', Button);
app.component('pv-paginator', Paginator)
app.mount('#app')
