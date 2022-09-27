
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/bootstrap-custom.css';
import './assets/css/form_style.css'
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app')

