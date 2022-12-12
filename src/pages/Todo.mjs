import { css } from "goober";
import TodoList from "../components/TodoList.mjs"
import { addTodo, todos } from "../services/data.mjs"

const styles = css`
    @media (min-width: 400px) {
        form {
            display: flex;
            gap: 16px;
            button {
                max-width: 100px;
            }
        }
    }
`;

export default {
    components: { TodoList },
    data: () => ({ newTodo: '' }),
    template: /* html */`
    <div class="${styles}">
        <form @submit="addTodoAndClear">
            <input type="text" id="todo" name="todo" v-model="newTodo" placeholder="What needs to be done?">
            <button type="submit">Add</button>
        </form>
        <TodoList :items="todoArray" />
    </div>
    `,
    computed: {
        todoArray() {
            return Array.from(todos.values());
        }
    },
    methods: {
        addTodoAndClear(event) {
            event.preventDefault();
            addTodo(this.newTodo);
            this.newTodo = '';
        },
    }
}