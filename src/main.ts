import "./assets/main.css";
import { globalLoader } from "vue-global-loader";
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(globalLoader);

app.use(createPinia());
app.use(router);

app.mount("#app");
