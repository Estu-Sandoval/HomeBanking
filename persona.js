export default class Persona{
    #apellido;#nombre;#estado_civil;#DNI;#fecha_de_nacimiento;

    constructor(ap,nom,est_civ,dni,fec_nac){
        this.#apellido = ap;
        this.#nombre = nom;
        this.#estado_civil = est_civ;
        this.#DNI = dni;
        this.#fecha_de_nacimiento = fec_nac;
    }

/* ------------------------ Método Setter ----------------------------- */
    set estado_civil(nuevo_estado_civil){
        this.#estado_civil = nuevo_estado_civil;
    }

/* Métodos Getter */
    get nombre(){
        return this.#nombre
    }

    get apellido(){
        return this.#apellido
    }

    get DNI(){
        return this.#DNI
    }

    get fecha_de_nacimiento(){
        return this.#fecha_de_nacimiento
    }

    get estado_civil(){
        return this.#estado_civil
    }

    obtenerEdad(){
        var hoy = new Date(Date.now())
        var fecNac = new Date(Date.parse(this.#fecha_de_nacimiento))
        var edad = hoy.getFullYear()-fecNac.getFullYear();
        if(hoy.getMonth()<fecNac.getMonth()){
            edad = edad-1;
        }
        else if(hoy.getMonth()==fecNac.getMonth()){
            if(hoy.getDate()<fecNac.getDate()){
                edad = edad -1;
            }
        }
        return edad;
    }
}