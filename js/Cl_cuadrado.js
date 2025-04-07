export default class Cl_cuadrado {
    constructor(altura){
        this.altura = altura;
    }
    set altura(a){
        this._altura = a;
    }
    get altura(){
        return this._altura;
    }
}