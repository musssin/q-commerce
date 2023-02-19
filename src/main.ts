import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

//Parse
import Parse from 'parse/dist/parse.min.js';
const PARSE_APP_URL = "https://parseapi.back4app.com/";
const PARSE_APP_ID = "1TGJoLZZshgqzVm5QT7xxHvvEAEX7pqLdnoqaGZg";
const PARSE_JS_KEY = "6Gqt1CTV4lfYCEoxGYV5zpXUTk8ul0E78VoLmmre";
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);
Parse.serverURL = PARSE_APP_URL;
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "./assets/main.css";

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    },
  },
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
