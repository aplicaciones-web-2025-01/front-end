import {createApp} from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import Lara from '@primeuix/themes/lara';
import Button from "primevue/button"
import 'primeflex/primeflex.css'
import Paginator from 'primevue/paginator';
import {SelectButton} from "primevue";
import i18n from "@/i18n.js";

const app = createApp(App);

app.use(PrimeVue,
    {
        theme: {
            preset: Lara
        }
    });


app.component('pv-button', Button);
app.component('pv-paginator', Paginator)
app.component('pv-select-button', SelectButton)

app.use(i18n)
app.mount('#app')
