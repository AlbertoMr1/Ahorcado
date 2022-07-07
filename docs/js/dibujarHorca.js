var tablero = document.getElementById("horca").getContext("2d");
tablero.lineWidth = 3;
tablero.lineCap = "round";
tablero.lineJoin = "round";
tablero.strokeStyle = "#0A3871";

function dibujarBase(){
    //linea base
    tablero.beginPath();
    tablero.moveTo(300,250);
    tablero.lineTo(350,250);
    tablero.stroke();
    tablero.closePath();
}
function dibujarPalo(){
    //palo
    tablero.beginPath();
    tablero.moveTo(325,250);
    tablero.lineTo(325,50);
    tablero.stroke();
    tablero.closePath();
}
function dibujarHorizontalSuperior(){
    //linea horizontal arriba
    tablero.beginPath();
    tablero.moveTo(325,50);
    tablero.lineTo(450,50);
    tablero.stroke();
    tablero.closePath();
}
function dibujarLineaCabeza(){
    //linea arriba de cabeza
    tablero.beginPath();
    tablero.moveTo(450,50);
    tablero.lineTo(450,60);
    tablero.stroke();
    tablero.closePath();
}
function dibujarCabeza(x,y){
    //cabeza
    tablero.beginPath();
    tablero.arc(450+x,80+y,20,0,2*Math.PI);
    tablero.stroke();
    tablero.closePath();
}
function dibujarCuerpo(x,y){
    //cuerpo
    tablero.beginPath();
    tablero.moveTo(450+x,100+y);
    tablero.lineTo(450+x,180+y);
    tablero.stroke();
    tablero.closePath();
}
function dibujarBrazoIzquierdo(x,y){
    //brazo izquierdo
    tablero.beginPath();
    tablero.moveTo(450+x,100+y);
    tablero.lineTo(420+x,150+y);
    tablero.stroke();
    tablero.closePath();
}
function dibujarBrazoDerecho(x,y){
    //brazo derecho
    tablero.beginPath();
    tablero.moveTo(450+x,100+y);
    tablero.lineTo(480+x,150+y);
    tablero.stroke();
    tablero.closePath();
}
function dibujarPieIzquierdo(x,y){
    //pie izquierdo
    tablero.beginPath();
    tablero.moveTo(450+x,180+y);
    tablero.lineTo(420+x,220+y);
    tablero.stroke();
    tablero.closePath();
}
function dibujarPieDerecho(x,y){
    //pie derecho
    tablero.beginPath();
    tablero.moveTo(450+x,180+y);
    tablero.lineTo(480+x,220+y);
    tablero.stroke();
    tablero.closePath();
}

function dibujarBrazoSaludo(){
    tablero.beginPath();
    tablero.moveTo(650,120);
    tablero.lineTo(690,120);
    tablero.lineTo(690,80);
    tablero.stroke();
    tablero.closePath();
}

function dibujarSalvado(){
    let x = 200;
    let y = 10;
    dibujarCabeza(x,y);
    dibujarCuerpo(x,y);
    dibujarBrazoIzquierdo(x,y+10);
    dibujarBrazoSaludo();
    dibujarPieDerecho(x,y);
    dibujarPieIzquierdo(x,y);
}

function borrarMonito(){
    tablero.clearRect(417,58,100,200);
}
