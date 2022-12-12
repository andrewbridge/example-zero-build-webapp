import { createApp } from "vue";
import App from './components/App.mjs';

const root = document.getElementById('root');
root.innerHTML = '';
const app = createApp(App);
app.mount(root);