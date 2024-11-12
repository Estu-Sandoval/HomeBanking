export default class Cuenta{
    static #numInstancia = 0;
    #id_cuenta;#dueño;#saldo;
    constructor(persona,saldo){
        Cuenta.#numInstancia++;
        this.#id_cuenta = Cuenta.#numInstancia;
        this.#saldo = saldo;
        this.#dueño = persona.apellido + " " + persona.nombre;
    }

    get saldo(){
        return this.#saldo;
    }

    get dueño(){
        return this.#dueño;
    }

    get id_cuenta(){
        return this.#id_cuenta;
    }

    set saldo(nuevoSaldo){
        this.#saldo = nuevoSaldo;
    }

    infoDeCuenta(){
        console.log(`Dueño: ${this.#dueño}\nSaldo: ${this.#saldo}`)
    }
}