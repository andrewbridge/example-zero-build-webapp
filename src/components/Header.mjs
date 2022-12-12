import { css } from 'goober';
import { activeHash } from '../services/routes.mjs';

const styles = css`
    border-bottom: 1px solid grey;

    h1 {
        margin-bottom: 0;
    }

    nav {
        justify-self: end;
        align-self: baseline;
    }

    a.active {
        --background-color: rgba(16, 149, 193, 0.1);
    }
`;

export default {
    data: () => ({ activeHash }),
    template: /* html */`
    <header class="container ${styles}">
        <div class="grid">
            <h1>Todo App</h1>
            <nav>
                <ul>
                    <li><a href="#" :class="{ active: activeHash === '/' }">To-dos</a></li>
                    <li><a href="#/completed" :class="{ active: activeHash === '/completed' }">Completed</a></li>
                </ul>
            </nav>
        </div>
    </header>`
}