import {menu} from "./componentes/menu.js";
import {footer} from "./componentes/footer.js";


let estructura_proteina =
`
<header id="header">
    ${menu}
</header>



<h1 class="h" >SÍNTESIS DE LAS PROTEINAS </h1>
<div class="ande" >
<p>El proceso conocido como síntesis de proteínas viene a estabilizar el desequilibrio ocasionado por la pérdida de proteínas celulares debida a la degradación que estas sufren al intervenir en la función para la que están destinadas. 
<br>
Su finalidad es permitir que el organismo forme macromoléculas que necesita para llevar a cabo sus funciones.</br>
el cuerpo humano no es capaz de utilizar las proteínas ingeridas mediante la alimentación directamente, sino que necesita romper sus enlaces peptídicos y, a partir de los aminoácidos que contienen, crear nuevas estructuras.
</p>
<img class="imagenes" src="img/image 1.png" alt=""> 
</div>


<div class="video">
<h1 class="texto-proteinas">¿QUE SON LAS PROTEINAS?</h1>
<iframe src="https://drive.google.com/file/d/1mhx0zDjlYySp5nlsJKenZHD8tj_VdlTQ/preview" width="640" height="480" allow="autoplay"></iframe>
</div>


<h1 class="Alimentos"> Proteinas por Alimentos </h1>

<div class="cuadroslipi"> 

<div class="general">
<div class="cuadro">
<img src="./img/Hamburguesa.png"> 
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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
<h3 class="porcentajelipi"> Porcentajes de Proteinas</h3>
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


// DOM
let root = document.getElementById("root");
root.innerHTML = estructura_proteina;
