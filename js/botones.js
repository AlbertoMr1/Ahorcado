var divInicio = document.getElementById("inicio");
var btnNuevaPalabra = document.getElementById("nuevaPalabra");
var interfazNuevaPalabra = document.querySelector(".agregarPalabra");
var input = document.getElementById("palabra");
var dialogo = document.querySelector("#ingresarPalabraDialogo");
interfazNuevaPalabra.style.display = "none";

function iniciarJuego(){
    divInicio.style.display = "none";
    btnNuevaPalabra.classList.remove("juego");
}

function regresarInicio(){
    divInicio.style.display = "flex";
    btnNuevaPalabra.classList.add("juego");
}

function agregarPalabra(){
    if(input.value.length > 0){
        palabras.push(input.value.toUpperCase());
        console.log("inicio");
        interfazNuevaPalabra.style.display = "none";
        iniciarJuego();
        inicio();
    }else{
        /*alert("Favor de ingresar una palabra");*/
        dialogo.show();
        setTimeout(function(){
            dialogo.close();
        },2000);
    }
}

function interfazAgregarPalabra(){
    interfazNuevaPalabra.style.display = "flex";
    divInicio.style.display = "none";
}

function cancelar(){
    interfazNuevaPalabra.style.display = "none";
    divInicio.style.display = "flex";
}
