import { ref } from "vue";
import Todo from "../pages/Todo.mjs";
import Completed from "../pages/Completed.mjs";

export const routes = {
    '/': Todo,
    '/completed': Completed,
};

export const activeHash = ref(window.location.hash.slice(1) || '/');
export const activeRoute = ref(routes[activeHash.value]);

window.addEventListener('hashchange', () => {
    activeHash.value = window.location.hash.slice(1) || '/';
    activeRoute.value = routes[activeHash.value];
});
