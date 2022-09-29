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
<video controls autoplay>
<source src="img/80E052D3-F6C3-4296-AD18-0030E2832F9C.mov" type="video/mp4">
</video>
</div>
</div>

<h1 class="procesados"> Carbohidratos por Alimentos </h1>
<div class="prot">
<img class="lineasazules" src="img/carbo1.jpg">
<img class="lineasazules" src="img/carbo2.jpg">
<img class="lineasazules" src="img/carbo3.jpg">
</div>

<footer id="footer">
    ${footer}
</footer>
`;

let root = document.getElementById("root");
root.innerHTML = estructura_carbohidratos;