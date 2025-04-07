/*Considerando que un rectángulo varía de un cuadrado sólo 
porque la altura no es igual a la base, diseñe la clase 
Cl_rectangulo que herede de Cl_cuadrado, y luego haga un programa 
que determine el área y el perímetro de un rectángulo 
(área= base * altura, perímetro= 2*base + 2*altura).
*/
import Cl_rectangulo from "./Cl_rectangulo.js";

let rec = new Cl_rectangulo(2,4);
let rec2 = new Cl_rectangulo(5,3);

let salida = document.getElementById("salida");
salida.innerHTML = `
Base del rectángulo: ${rec.base} <br>
Altura: ${rec.altura}<br>
Área resultante: ${rec.area()}<br>
Perímetro: ${rec.perimetro()}<p>

Base del rectángulo: ${rec2.base}<br>
Altura: ${rec2.altura}<br>
Área resultante: ${rec2.area()}<br>
Perímetro: ${rec2.perimetro()}
`