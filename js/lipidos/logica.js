import { elementos_lipidos } from "./galeria_pidos.js";
import { alimentos } from "../data/data_lipidos.js";

export function galeria(){
    let lipidos = document.querySelector("#idos");

    alimentos.forEach(function(elemento,indice){
        let div = document.createElement("div");
        div.setAttribute("class","item");
        div.innerHTML = elementos_lipidos(indice)
        lipidos.appendChild(div); 
    })}