import { css } from 'goober';
import { removeTodo } from "../services/data.mjs"

const styles = css`
    align-items: center;
    padding: 8px var(--block-spacing-horizontal);
    margin-bottom: 16px;

    label.completed {
        text-decoration: line-through;
    }

    button {
        width: 48px;
        padding: 8px;
        margin: 0;
        justify-self: end;
    }
`;

export default {
    props: ['items'],
    template: /* html */`
    <article class="grid ${styles}" v-for="item in items" :key="item.id">
        <label :class="{ completed: item.completed }"><input type="checkbox" v-model="item.completed"> {{item.name}}</label>
        <button aria-label="Remove item" class="secondary outline" @click="removeTodo(item.id)">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
    </article>
    `,
    methods: {
        removeTodo,
    }
}