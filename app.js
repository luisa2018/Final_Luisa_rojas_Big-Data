
// Variables operadoras

var operandoa;
var operandob;
var operacion;

// Asignacion de variables de varibles 

var siete = document.getElementById("7");
var ocho = document.getElementById("8");
var nueve = document.getElementById("9");
var cuatro = document.getElementById("4");
var cinco = document.getElementById("5");
var seis = document.getElementById("6");
var uno = document.getElementById("1");
var dos = document.getElementById("2");
var tres = document.getElementById("3");
var cero = document.getElementById("0");
var on = document.getElementById("on");
var division = document.getElementById("dividido");
var multiplicacion = document.getElementById("por");
var resta = document.getElementById("menos");
var suma = document.getElementById("mas");
var igual = document.getElementById("igual");
var pantalla = document.getElementById("display");
var punto = document.getElementById("punto");
var signo = document.getElementById("sign");

// Evento onmousedown y onmouseup tecla siete

siete.onmousedown = function(){
    document.getElementById('7').style="width:20%;";
    document.getElementById('7').style=" height:60.50px;";

    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "7";
        } else {
        display.textContent = display.textContent + "7";}
    }
}
siete.onmouseup = function(){
    document.getElementById('7').style="width:22%;";
    document.getElementById('7').style="height:62.91px;";  
}

// Evento onmousedown y onmouseup tecla ocho 

ocho.onmousedown = function(){     
    document.getElementById('8').style="width:20%;";
    document.getElementById('8').style=" height: 60.50px;";

    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "8";
        } else {
        display.textContent = display.textContent + "8";}
    }
}
ocho.onmouseup = function(){ 
    document.getElementById('8').style="width:22%;";
    document.getElementById('8').style=" height: 62.91px;";
}

// Evento onmousedown y onmouseup tecla nueve

nueve.onmousedown = function(){   
    document.getElementById('9').style="width:20%;";
    document.getElementById('9').style=" height: 60.50px;";

    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "9";
        } else {
        display.textContent = display.textContent + "9";}
    }
}
nueve.onmouseup = function(){
    document.getElementById('9').style="width:22%;";
    document.getElementById('9').style=" height: 62.91px;";  
}

// Evento onmousedown y onmouseup tecla cuatro

cuatro.onmousedown = function(){
    document.getElementById('4').style="width:20%;";
    document.getElementById('4').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "4";
        } else {
        display.textContent = display.textContent + "4";}
    }
}
cuatro.onmouseup = function(){
    document.getElementById('4').style="width:22%;";
    document.getElementById('4').style=" height: 62.91px;";
}

// Evento onmousedown y onmouseup tecla cinco

cinco.onmousedown = function(){
    document.getElementById('5').style="width:20%;";
    document.getElementById('5').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "5";
        } else {
        display.textContent = display.textContent + "5";}
    }
}
cinco.onmouseup = function(){
    document.getElementById('5').style="width:22%;";
    document.getElementById('5').style=" height: 62.91px;";   
}

// Evento onmousedown y onmouseup tecla seis

seis.onmousedown = function(){
    document.getElementById('6').style="width:20%;";
    document.getElementById('6').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "6";
        } else {
        display.textContent = display.textContent + "6";}
    }
}
seis.onmouseup = function(){
    document.getElementById('6').style="width:22%;";
    document.getElementById('6').style=" height: 62.91px;";   
}

// Evento onmousedown y onmouseup tecla uno

uno.onmousedown = function(){
    document.getElementById('1').style="width:20%;";
    document.getElementById('1').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "1";
        } else {
        display.textContent = display.textContent + "1";}
    }
}
uno.onmouseup = function(){
    document.getElementById('1').style="width:22%;";
    document.getElementById('1').style=" height: 62.91px;";
}

// Evento onmousedown y onmouseup tecla dos

dos.onmousedown = function(){
    document.getElementById('2').style="width:20%;";
    document.getElementById('2').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "2";
        } else {
        display.textContent = display.textContent + "2";}
    }
}
dos.onmouseup = function(){
    document.getElementById('2').style="width:22%;";
    document.getElementById('2').style=" height: 62.91px;";   
}

// Evento onmousedown y onmouseup tecla tres

tres.onmousedown = function(){
    document.getElementById('3').style="width:20%;";
    document.getElementById('3').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "3";
        } else {
        display.textContent = display.textContent + "3";}
    }
}
tres.onmouseup = function(){
    document.getElementById('3').style="width:22%;";
    document.getElementById('3').style=" height: 62.91px;";
}

// Evento onmousedown y onmouseup tecla cero

cero.onmousedown = function(){
    document.getElementById('0').style="width:20%;";
    document.getElementById('0').style=" height: 60.50px;";
    if (display.textContent.length != 8) {
        if (display.textContent == "0") {
        display.textContent =  "0";
        } else {
        display.textContent = display.textContent + "0";}
    }    
}
cero.onmouseup = function(){
    document.getElementById('0').style="width:22%;";
    document.getElementById('0').style=" height: 62.91px;";       
}

// Evento onmousedown y onmouseup tecla punto
   
punto.onmousedown = function(){
    document.getElementById('punto').style="width:20%;";
    document.getElementById('punto').style=" height: 60.50px;";
    teclapunto();
}
punto.onmouseup = function(){
    document.getElementById('punto').style="width:22%;";
    document.getElementById('punto').style=" height: 62.91px;";       
}

// Evento onmousedown y onmouseup tecla signo menos 

signo.onmousedown = function(){
    document.getElementById('sign').style="width:20%;";
    document.getElementById('sign').style=" height: 60.50px;";
    teclasigno();
}
signo.onmouseup = function(){
    document.getElementById('sign').style="width:22%;";
    document.getElementById('sign').style=" height: 62.91px;";       
}

// Evento onmousedown y onmouseup tecla de la operacion suma 

suma.onmousedown = function(){
    document.getElementById('mas').style="width:89%;";
    document.getElementById('mas').style=" height:98.00%;";
    operandoa = display.textContent;
    operacion = "+";
    limpiar();     
}
suma.onmouseup = function(){
    document.getElementById('mas').style="width:90%;";
    document.getElementById('mas').style=" height: 100%;";
}

// Evento onmousedown y onmouseup tecla de la operacion multiplicacion 

multiplicacion.onmousedown = function(){
    document.getElementById('por').style="width:20%;";
    document.getElementById('por').style=" height: 60.50px;";
    operandoa = display.textContent;
    operacion = "*";
    limpiar();  
}
multiplicacion.onmouseup = function(){  
    document.getElementById('por').style="width:22%;";
    document.getElementById('por').style=" height: 62.91px;"; 
}

// Evento onmousedown y onmouseup tecla de la operacion division 

division.onmousedown = function(){
    document.getElementById('dividido').style="width:20%;";
    document.getElementById('dividido').style=" height: 60.50px;";
    operandoa = display.textContent;
    operacion = "/";
    limpiar();  
}
division.onmouseup = function(){
    document.getElementById('dividido').style="width:22%;";
    document.getElementById('dividido').style=" height: 62.91px;";
}

// Evento onmousedown y onmouseup tecla de la operacion resta 

resta.onmousedown = function(){
    document.getElementById('menos').style="width:20%;";
    document.getElementById('menos').style=" height: 60.50px;";
    operandoa = display.textContent;
    operacion = "-";
    limpiar();  
}
resta.onmouseup = function(){
    document.getElementById('menos').style="width:22%;";
    document.getElementById('menos').style=" height: 62.91px;";
}

//Evento onmousedown y onmouseup tecla igual 

igual.onmousedown = function(){ 
    document.getElementById('igual').style="width:20%;";
    document.getElementById('igual').style=" height: 60.50px;";
    operandob = display.textContent;
    resolver(); 
}
igual.onmouseup = function(){
    document.getElementById('igual').style="width:22%;";
    document.getElementById('igual').style=" height: 62.91px;";
}

// onmousedown y onmouseup Evento tecla on

on.onmousedown = function(){  
    document.getElementById('on').style="width:20%;";
    document.getElementById('on').style=" height: 60.50px;";
    resetear(); 
}
on.onmouseup = function(){  
    document.getElementById('on').style="width:22%;";
    document.getElementById('on').style=" height: 62.91px;";   
}

/* FUNCIONES USADAS */

// 1.0 Funcion que limpia entre operaciones

function limpiar (){
    display.textContent = "";
}

// 2.0 Funcion que limpia la pantalla

function resetear (){
    display.textContent = "0";
    operandoa = 0;
    operandob = 0; 
    operacion = "";
}

 // 3.0 Funcion que valida la funcionalidad de la tecla punto 

function teclapunto(){
    if( display.textContent.indexOf('.') == -1) {
    display.textContent += '.';
    }
}

// 4.0  Funcion que valida la funcionalidad de la tecla signo menos 

function teclasigno() {
    var cadena = display.innerHTML;
    var i = cadena.indexOf("-");
    if (i == -1){
    display.innerHTML = "-" + cadena
    } else{
    cadena = cadena.substring(1,cadena.length);
    display.innerHTML = cadena
    }
}

//5.0 Funcion que realiza las cuatro operaciones basicas y la validacion de los 8 digitos en pantalla

function resolver (){
    var res = 0;
    
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat (operandob);
            break;
        case "-":
            res = parseFloat(operandoa) - parseFloat (operandob);
            break;
        case "*":
           res = parseFloat(operandoa) * parseFloat (operandob);
           break;
        case "/":
           res = parseFloat(operandoa) / parseFloat (operandob);
           break;
        }
           resetear();

 // validacion digitos 

display.innerHTML = res;
var cadena = display.innerHTML;
cadena = cadena.substring(0,8);
display.innerHTML = cadena;

}
     
    