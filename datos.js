import Usuario from './usuario.js';
import Cuenta from './cuenta.js'
import Persona from './persona.js'

export let personas = [
    new Persona("Sandoval","Esteban","Soltero","34545869","10/07/1989"),
    new Persona("Sandoval","Victor","Casado","17395076","07/21/1965")
]

const datos = {
    cuentas:[
        new Cuenta(personas[0],750000),
        new Cuenta(personas[0],200000),
        new Cuenta(personas[1],1500000),
    ],
    usuarios:[
        new Usuario("Estu891","miPerro123",1),
        new Usuario("SaVi65","HolaMundo789",3),
    ]
}

export default datos;

