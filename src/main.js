import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import router from '@/router';
import 'jquery';
import 'popper.js';
import 'bootstrap';
import './assets/app.css';




createApp(App).use(router).mount("#app");