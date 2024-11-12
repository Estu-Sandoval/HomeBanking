import datos from "./datos.js";

datos.usuarios[0].agregaCuenta(2);

document.getElementById("iniciaSesion").addEventListener("click",(e)=>{
    e.preventDefault()
    let username = document.getElementById("nombre_usuario");
    let password = document.getElementById("password");
    let msg = "Usuario y/o contraseña incorrectos"
    datos.usuarios.forEach(usuario => {
        if(username.value === usuario.nombre_usuario){
            if(password.value === usuario.password){
                msg = username.value +" Iniciaste Sesión";
                localStorage.setItem("Acounts",usuario.misCuentas);
                window.location.href = "./transferencia.html"
                return
            }     
        }
    });
    alert(msg);
    username.value = "";
    password.value = "";
})
