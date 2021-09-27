/* eslint-disable quotes */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Validation from "./includes/Validation";
import "./assets/tailwind.css";
import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Validation);

app.mount("#app");
