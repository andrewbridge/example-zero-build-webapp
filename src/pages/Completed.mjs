import TodoList from "../components/TodoList.mjs"
import { todos } from "../services/data.mjs"

export default {
    components: { TodoList },
    template: /* html */`
    <h2>Completed</h2>
    <TodoList :items="completedTodos" />
    `,
    computed: {
        completedTodos() {
            return Array.from(todos.values()).filter(({ completed }) => completed);
        }
    }
}