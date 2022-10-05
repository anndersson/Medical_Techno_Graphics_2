import { alimentos } from './../data/data_lipidos.js'


 export let contenido =
 `
    <div class="alimento">
        <img src=" ${alimentos[0].img}">
        <div>
        <span>
            ${alimentos[0].descripcion}
        </span>
        </div>
    </div>

    <div class="alimento">
    <img src=" ${alimentos[1].img}">
    <div>
    <span>
        ${alimentos[1].descripcion}
    </span>
    </div>
</div>
 `;



console.log(contenido)