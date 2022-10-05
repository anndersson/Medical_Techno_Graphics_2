import { alimentos } from "../data/data_lipidos";
export function elementos_lipidos(elemento){
let contenido = 
'+<div class="alimento">'+
'+<img src="'+alimentos[elemento].img+'">'+
'+<div>'+
    '+<span>'+alimentos[elemento].descripcion+'</span>'+
'+</div>'+
'+</div>'
return contenido
};

