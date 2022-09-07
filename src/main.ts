import {createApp} from 'vue'
import './_z.scss';
import './index.scss';
import 'github-markdown-css';
import App from './App.vue';
import {router} from './router';
import Markdown from './components/Markdown.vue';
import "./assets/svg.js";

const app = createApp(App);
app.component('Markdown', Markdown);
app.use(router);
app.mount('#app');
