import datos from './datos.js'

const Acounts = localStorage.getItem("Acounts");

const fragmento = document.createDocumentFragment();

const btn_transferir = document.getElementById("transferir").addEventListener(
    "click", (e)=>{
        e.preventDefault();
        let id_cuenta_origen = document.getElementById("origen").value;
        let id_cuenta_destino = document.getElementById("destino").value;
        let importe = document.getElementById("importe").value;
        let cuentaOrigen = "";
        let cuentaDestino = "";
        if(id_cuenta_origen!="" && id_cuenta_destino!="" && importe!=""){
            datos.cuentas.forEach(
                cuenta => {
                    if(id_cuenta_destino == cuenta.id_cuenta){
                        cuentaDestino = cuenta;
                    }
                    if(id_cuenta_origen == cuenta.id_cuenta){
                        cuentaOrigen = cuenta;
                    }
                }
            )
            console.log("ANTES DE LA TRANSFERENCIA",`Saldo cuenta destino: ${cuentaDestino.saldo}`,`Saldo cuenta origen: ${cuentaOrigen.saldo}`);
            if(cuentaDestino!=""){
                if(importe <= 0){
                    alert("El impote debe ser un valor positivo mayor que 0")
                }
                else{
                    if(cuentaOrigen.saldo >= importe){
                        if(cuentaDestino.id_cuenta != cuentaOrigen.id_cuenta){
                            cuentaDestino.saldo+=parseFloat(importe);
                            cuentaOrigen.saldo-=parseFloat(importe);
                            alert(`La transferencia de $${importe} de la cuenta ${cuentaOrigen.id_cuenta} a la cuenta ${cuentaDestino.id_cuenta} ha sido exitosa`);
                        }
                        else{
                            alert("No se puede hacer la transferencia porque la cuenta origen y destino son idénticas");
                        }
                    }
                    else{
                        alert("No tiene fondos sufientes");
                    }
                }
            }
            else{
                alert("La cuenta destino no existe");
            }
            document.getElementById("origen").value = "";
            document.getElementById("destino").value = "";
            document.getElementById("importe").value = "";
            console.log("DESPUÉS DE LA TRANSFERENCIA",`Saldo cuenta destino: ${cuentaDestino.saldo}`,`Saldo cuenta origen: ${cuentaOrigen.saldo}`);
        }
        else{
            alert("Exiten campos vacíos");
        }
    }
)

window.addEventListener("load",()=>{
    Acounts.split(",").forEach(
        cuenta => {
            let opcion = document.createElement("option");
            opcion.value = cuenta;
            opcion.textContent = cuenta;
            fragmento.appendChild(opcion);
        }
    )
    document.getElementById("origen").appendChild(fragmento);
})