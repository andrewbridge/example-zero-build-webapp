import { css } from 'goober';
import { activeRoute } from "../services/routes.mjs";
import Header from "./Header.mjs";

const styles = css`
    margin: 16px auto;
`;

export default {
    data: () => ({ activeRoute }),
    components: { Header },
    template: /* html */`
    <Header />
    <main class="container ${styles}">
        <component :is="activeRoute" />
    </main>
    `
}