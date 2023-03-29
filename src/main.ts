/* eslint-disable prettier/prettier */
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import './assets/main.css';
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1F7087'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});
//Axios
import {VueAxios, axios} from '@/boot/axios'
//i18n
import i18n from '@/boot/i18n'


const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.use(VueAxios, axios);
app.use(i18n);

app.mount('#app');
