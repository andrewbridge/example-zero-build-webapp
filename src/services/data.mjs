import { reactive, watchEffect } from 'vue';

/**
 * @typedef {import("../app").ToDo} ToDo
 */

const TODO_PERSIST_KEY = 'EXAMPLE_TODO_APP_ITEMS';
/** @type {Map<ToDo['id'], ToDo>} */
export const todos = reactive(new Map());
try {
    const dataArray = JSON.parse(window.localStorage.getItem(TODO_PERSIST_KEY));
    dataArray.forEach((item) => todos.set(item.id, item));
} catch {}

watchEffect(() => {
    window.localStorage.setItem(TODO_PERSIST_KEY, JSON.stringify(Array.from(todos.values())));
});

/** @type {(name: string) => void} */
export const addTodo = (name) => {
    const id = Date.now();
    todos.set(id, { id, name, completed: false });
};

/** @type {(id: ToDo['id'], completeState: boolean) => void} */
export const setCompleteState = (id, completeState) => {
    const item = todos.get(id);
    if (!item) return;
    item.completed = completeState;
}

/** @type {(id: ToDo['id']) => void} */
export const removeTodo = (id) => todos.delete(id);
