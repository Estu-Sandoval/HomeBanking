export default class Usuario{
    #nombre_usuario;#password; #id_cuentas;
    constructor(nombre_usu,password,primera_cuenta){
        this.#nombre_usuario = nombre_usu;
        this.#password = password;
        this.#id_cuentas = [];
        this.#id_cuentas.push(primera_cuenta);
    }

    agregaCuenta(idcuenta){
        this.#id_cuentas.push(idcuenta);
    }

    get misCuentas(){
        return this.#id_cuentas;
    }

    get nombre_usuario(){
        return this.#nombre_usuario;
    }

    get password(){
        return this.#password;
    }

    set password(new_password){
        this.#password = new_password;
    }
}