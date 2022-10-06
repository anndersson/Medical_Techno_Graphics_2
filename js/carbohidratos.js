import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_carbohidratos =
`
<header id="header">
    ${menu}
</header>



<h1 class="sin" > Síntesis de los Carbohidratos </h1>
<div class="ande" >
<p>Junto con las grasas y las proteínas, los carbohidratos son uno de los tres macronutrientes en nuestra dieta y su función principal es proporcionar energía al cuerpo. Aparecen en muchas formas diferentes, como azúcares y fibra dietética, y en muchos alimentos diferentes, como granos enteros, frutas y verduras. 
En este artículo, exploramos la variedad de carbohidratos que ocurren en nuestra dieta y sus funciones.
<br>
En su forma más básica, los carbohidratos están hechos de bloques de construcción de azúcares, y se pueden clasificar de acuerdo con la cantidad de unidades de azúcar que se combinan en su molécula
</p>
<img class="dat" src="img/datoss.png"> 
</div>

<div class="video"> 
<h1 class="texto-proteinas">¿QUE SON LOS CARBOHIDRATOS?</h1>
<iframe src="https://drive.google.com/file/d/1mhx0zDjlYySp5nlsJKenZHD8tj_VdlTQ/preview" width="640" height="480" allow="autoplay"></iframe>s
</div>
</div>

<h1 class="procesados"> Carbohidratos por Alimentos </h1>

<div class="cuadroslipi"> 

<div class="general">
<div class="cuadro">
<img src="./img/Hamburguesa.png"> 
<h3 class="porcentajelipi"> Porcentajes de carbohidratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>


<div class="general">
<div class="cuadro">
<img src="./img/platosnegros.png"> 
<h3 class="porcentajelipi"> Porcentajes de carbohidratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>

<div class="general">
<div class="cuadro">
<img src="img/pescado.png"> 
<h3 class="porcentajelipi"> Porcentajes de carbohidratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>

<div class="general">
<div class="cuadro">
<img src="img/pollonaranja.png"> 
<h3 class="porcentajelipi"> Porcentajes de carbohidratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>

<div class="general">
<div class="cuadro">
<img src="img/frutas.png"> 
<h3 class="porcentajelipi"> Porcentajes de Carbohidratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>

<div class="general">
<div class="cuadro">
<img src="img/brocoli.png"> 
<h3 class="porcentajelipi"> Porcentajes de Carbohdratos</h3>
</div>


<div class="verde">
<div class="amarillo">
<h3> 10% </h3>
<h3> 23% </h3>
<h3> 15% </h3>
</div>
 <img class="barra" src="img/barras2.jpg">
</div>
</div>

</div>

<footer id="footer">
    ${footer}
</footer>
`;

let root = document.getElementById("root");
root.innerHTML = estructura_carbohidratos;


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