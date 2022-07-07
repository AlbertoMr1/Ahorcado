var canvas = document.getElementById("horca");
var tablero = canvas.getContext("2d");
var palabras = ["ALURA","AHORCADO","ORACLE","HTML","CSS","JAVASCRIPT"];
var letras = [];
var palabraCorrecta = "";
var palabraSecreta = "";
var errores = 9;
var contadorVictoria = 0;
var contadorHorca = 0;

function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;
}

function dibujarLineas(){
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 700 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(300+(ancho*i),350);
        tablero.lineTo(350+(ancho*i),350);
    }
    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index){
    tablero.font = "bold 50px Inter"; //Agregar inter
    tablero.lineWidth = 3;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 700 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 300 + (ancho*index),340);
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = "bold 40px Sans-Serif"; //Agregar inter
    tablero.lineWidth = 3;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText(letra, 150+(40*(10-errorsLeft)),420,40);
}

function verificarLetraClicada(key){
    if(letras.length < 1 || letras.indexOf(key) < 0){
        letras.push(key);
        return false;
    }else{
        letras.push(key)
        return true;
    }
}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letter){
    if(palabraSecreta.indexOf(letter) <= 0){
        errores -= 1
    }
}

function ganaste(){
    tablero.font = "bold 50px Sans-Serif"; //Agregar inter
    tablero.lineWidth = 3;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText("¡Felicidades!", 800,70);
    tablero.fillText("¡Ganaste!", 835, 140);
}


function perdiste(){
    tablero.font = "bold 50px Sans-Serif"; //Agregar inter
    tablero.lineWidth = 3;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    tablero.fillText("Perdiste :(", 800,105);
}

function inicio(){
    tablero.clearRect(0,0, canvas.width,canvas.height);
    palabraCorrecta = "";
    palabraSecreta = "";
    errores = 9;
    contadorVictoria = 0;
    contadorHorca = 0;
    letras = [];
    dibujarLineas(escojerPalabraSecreta());
    dibujarBase();
    dibujarPalo();
    dibujarHorizontalSuperior();
    dibujarLineaCabeza();
}inicio();

document.onkeydown = (e) => {
    if(!"QWERTYUIOPASDFGHJKLÑZXCVBNM".includes(e.key.toUpperCase())) return;
    if(contadorVictoria === palabraSecreta.length) return;
    if(contadorHorca === 6) return;
    let letra=e.key.toUpperCase();
    if(!verificarLetraClicada(e.key)){
        if(palabraSecreta.includes(letra)){
            console.log(letra);
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra));
            for (let i = 0; i < palabraSecreta.length; i++) {
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i);
                    contadorVictoria++;
                }
            }
            if(contadorVictoria === palabraSecreta.length){
                ganaste();
                borrarMonito();
                dibujarSalvado();
                contadorHorca=0;
            }
        }else{
            if(!verificarLetraClicada(e.key)) return
            adicionarLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra,errores);
            contadorHorca++;
        }
    }
    switch(contadorHorca){
        case 1:
            dibujarCabeza(0,0);
            break;
        case 2:
            dibujarCuerpo(0,0);
            break;
        case 3:
            dibujarBrazoIzquierdo(0,0);
            break;
        case 4:
            dibujarBrazoDerecho(0,0);
            break;
        case 5:
            dibujarPieIzquierdo(0,0);
            break;
        case 6:
            dibujarPieDerecho(0,0);
            perdiste();
            console.log("perdiste");
            break;
    }
    console.log(contadorVictoria);
};

/*
//NUEVO CÓDIGO
var tablero = document.getElementById("horca").getContext("2d");
var palabras = ["ALURA","AHORCADO","ORACLE","HTML","CSS","JAVASCRIPT"];
var letras = [];
var palabraCorrecta = "";
var palabraSecreta = "";
var errores = 9;
var contadorVictoria = 0;
var contadorHorca = 0;

function escojerPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabra);
    return palabraSecreta;
}

function dibujarLineas(){
    tablero.lineWidth = 1;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.strokeStyle = "#0A3871";
    tablero.beginPath();

    var ancho = 200 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(45+(ancho*i),120);
        tablero.lineTo(60+(ancho*i),120);
    }
    tablero.stroke();
    tablero.closePath();
}dibujarLineas(escojerPalabraSecreta());

function escribirLetraCorrecta(index){
    tablero.font = "bold 50px Inter"; //Agregar inter
    tablero.lineWidth = 3;
    tablero.lineCap = "round"
    tablero.lineJoin = "round";
    tablero.fillStyle = "#0A3871";

    var ancho = 200 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 45+(ancho*index),115);
}
escribirLetraCorrecta(1);
*/