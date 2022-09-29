import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";
import {sdl_lipidos} from "./lipidos/sintesis_de_los_lipidos.js";
import {v_lipidos} from "./lipidos/video_lipidos.js";
import {elementos_lipidos} from "./lipidos/galeria_pidos.js";

let estructura_lipidos =
`
<header id="header">
    ${menu}
</header>

<section>
    ${sdl_lipidos}
</section>


<div class="video">
    ${v_lipidos}
</div>

<h1 class="Alimentos"> Proteinas Por Alimentos </h1>

<div class="alimentos">
    ${elementos_lipidos}
</div>

<footer id="footer">
    ${footer}
</footer>
`;

let root = document.getElementById("root");
root.innerHTML = estructura_lipidos;