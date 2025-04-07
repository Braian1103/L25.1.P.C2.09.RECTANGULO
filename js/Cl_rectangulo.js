import Cl_cuadrado from "./Cl_cuadrado.js";

export default class Cl_rectangulo extends Cl_cuadrado{
    constructor(altura,base){
        super(altura);
        this.base = base;
    }
    area(){
        return this.base * this.altura;
    }
    perimetro(){
        return this.base * 2 + this.altura * 2;
    }
}