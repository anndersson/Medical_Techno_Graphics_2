import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";
import {estadistica} from "./componentes/estadistica.js"
import {piramide} from "./componentes/piramide.js"
import {Botones} from "./componentes/Botones.js"

let estructura_index = 
`
<header id="header">
    ${menu}
</header>

<section id="estadistica">
${estadistica}
</section>

<section id="piramide">
${piramide}
</section>

<section id="Botones">
${Botones}
</section>

<footer id="footer">
    ${footer}
</footer>
`;

// DOM
let root = document.getElementById("root");
root.innerHTML = estructura_index;