import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";
import {sdl_lipidos} from "./lipidos/sintesis_de_los_lipidos.js";
import {v_lipidos} from "./lipidos/video_lipidos.js";
import {contenido} from "./lipidos/galeria_pidos.js";

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
  ${contenido}
</div>

<footer id="footer">
    ${footer}
</footer>
`;

export function buscador(){
    let caja_resultados = document.querySelector("#caja_resultados");

    document.addEventListener("keyup", e=>{
        if(e.target.matches("#buscador")){
            document.querySelectorAll(".articulo").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?articulo.classList.remove("filtro")
                :articulo.classList.add("filtro")
            })
        }
        if(e.target.value == ""){
            document.querySelectorAll(".articulo").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?articulo.classList.add("filtro")
                :articulo.classList.add("filtro")
            })
        }
        if(e.target.matches("#buscador")){
            document.querySelectorAll(".articulo").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?caja_resultados.classList.remove("filtro")
                :caja_resultados.classList.remove("filtro")
            })
        }
        if(e.target.value == ""){
            document.querySelectorAll(".articulo").forEach(articulo => {
                articulo.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ?caja_resultados.classList.add("filtro")
                :caja_resultados.classList.add("filtro")
            })
        }
    });
}
buscador();

let root = document.getElementById("root");
root.innerHTML = estructura_lipidos;