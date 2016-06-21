
//Ejercicio #1 SUMA DE DOS NUMEROS
/*
var num1;
var num2;
var resultado;
a = parseInt(prompt("El primer numero es : ","numero"));
b = parseInt(prompt("El segundo numero es : ","numero"));
resultado = num1 + num2;

alert ("El resultado es : " + resultado); */

//Ejercicio #2: PROMEDIO DE 3 NÚMEROS
/*
var num1;
var num2;
var num3;
num1 = (prompt("El primer numeros es : ","numero"));
num2 = (prompt("El segundo numero es : ","numero"));
num3 = (prompt ("El tercer numero es : ","numero"));
promedio = ((parseInt(num1) + parseInt(num2) + parseInt(num3)) /3)

alert("El promedio es : " + promedio);
*/


//Ejercicio #3: CÁLCULO AREA DE UN TRIÁNGULO
/*
var a;
var b;
var area;
a = parseInt(prompt("El primer lado del triangulo es : ","numero"));
b = parseInt(prompt("El segundo lado del triangulo es : ","numero"));
area = (a*b)/2;
alert ("El area de el triangulo es : " + area);
*/

//Ejercicio #4: CÁLCULAR CANTIDAD GALONES DE LECHE
/*
var litros;
var galon;
litros = prompt("ingrese cantidad de litros", "litros");
galon = (parseInt (litros)/3785);

alert ("Son " + galon + " galones");
*/

//Ejercicio #5: SUELDO
/*
var hora;
var pago;
var dias;
var total;
hora = parseInt(prompt("Ingrese las horas trabajas por dia","horas"));
pago = parseInt(prompt("Ingrese las pago por hora","Pago por hora"));
dias = parseInt(prompt("Ingrese los dias trabajados por semana", "dias semana"));
total = hora * pago * dias;

alert("sueldo por semana: " + total );
*/

//Ejercicio #6: CONVERSION MEDIDAS DE LA TELA
/*
var metros;
var pulgadas;
metros = parseInt(prompt("Ingrese los metros de tela","metros"));
pulgadas = metros/0.0254;

alert ("las pulgadas son:"+ pulgadas);
*/


//Ejercicio #7: PINTURAS "LA BROCHA GORDA"
/*
var valor;
var metros;
var presupuesto;
valor =  parseInt(prompt("ingrese valor de metro cuadrado", "valor"));
metros =  parseInt(prompt("ingrese metros cuadrados a pintar", "metros"));
presupuesto = (parseInt(valor) * parseInt(metros));

alert(" el presupuesto por " + metros + " metros cuadrados es " + presupuesto);
*/

//Ejercicio #8: AUTOBUSES "LA CURVA LOCA"
/*
var km;
var costo;
var costoviaje;
km =prompt("Ingrese km recorridos","km");
costo =prompt("Ingrese costo de km recorrido","");
costoviaje = (parseInt(costo)*parseInt(km));

alert("El valor de boleto es " + costoviaje);
*/

//Ejercicio #9: LLAMADA TELEFÓNICA
/*
var duracion;
var valor;
var costo;
duracion = parseInt(prompt("Ingrese duración de su llamada","duracion minutos"));
valor = parseInt(prompt("ingrese tarifa de llamada por minuto","costo por minutos"));
costo = duracion * valor;

alert("El costo de tu llamada es " + costo);
*/

//Ejercicio #10: Hotel “Cama Arena” l

var noches;
var costonoche;
var valorestancia;
noches = prompt("Ingrese cantidad de noches a alojarse","cantidad de noches");
costonoche = prompt("Ingrese costo por la noche","valor noche");
valorestancia = (parseInt(costonoche) * parseInt(noches));
alert("El valor a pagar por " + noches + " noches es de " + valorestancia);