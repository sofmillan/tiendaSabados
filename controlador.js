import {productos} from "./data.js";

let fila = document.getElementById("fila");

productos.forEach(producto=>{
    let columna = document.createElement("div");
    columna.classList.add("col");
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card","shadow");
    let foto = document.createElement("img");
    foto.classList.add("img-fluid");
    foto.src = producto.foto;

    tarjeta.appendChild(foto);
    columna.appendChild(tarjeta);
    fila.appendChild(columna)

})