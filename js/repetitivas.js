//Ejercicio #1: SUMA 10 NUMEROS CICLO WHILE
/*
var numero; 
var i; 
var total;

total = 0;
i = 1 ; 
while(i <= 10){
	numero = parseInt (prompt("ingrese numero ", "numero" +i ));
	total = total+numero;
	i++;
}
alert("Su numero es : " + total);
*/

//Ejercicio #2: SUMA 10 NUMEROS CICLO DO...WHILE
/*
var numero; 
var i; 
var total;

total=0;
i = 1
do{
	numero = parseInt(prompt("Ingrese el numero : " "numero" +i));
	total = total + numero;
	i++;
}while( i<=10 );

alert("La suma es : " + total);
*/

//Ejercicio #3: SUMA 10 NUMEROS CICLO FOR
/*
var numero; 
var i; 
var total;

total = 0;
for(i=1; i<=10 ; i++){
	numero = parseInt (prompt("Ingrese el numero " + i));
	total=numero+total;
}
alert(total);
*/



//Ejercicio #4: EDAD PROMEDIO
// FOR
/*
var numero;
var nota;
var i;
var promedio;
var final; 

numero = parseInt(prompt("Ingrese el numero de alumnos","numero alumnos"));
promedio = 0;
for (i=1 ; i<=numero ; i++ ){
	nota = parseInt(prompt("Ingrese la nota "+i));
	promedio = promedio + nota;
	if(i===numero){
		final = (promedio/numero);

		alert("su promedio es :" + final);
	}
}
*/


//WHILE
/*
var numero;
var nota;
var i;
var promedio;
var final;

numero = prompt("ingrese el numero de alumnos", "numero alumnos");
promedio =0 ; 
i = 1
while ( i<=numero ){
	nota = parseInt(prompt("ingrese la nota del alumno "+i));
	promedio = promedio + nota;
	i++;
}
final = promedio/numero;

alert("el promedio final es : "+ final);
*/


//DO WHILE
/*
var numero;
var nota;
var i;
var promedio;
var final;

 promedio = 0;
 i=1;
 numero = parseInt(prompt("Ingrese el numero de alumnos", "numero alumnos"));
 do{
 	nota = parseInt(prompt("ingrese la nota del alumno "+i));
 	promedio = promedio+nota;
 	i++; 
 }while(i<=numero);
 final = promedio/numero;
 alert("El promedio final es : " + final);
*/

//Ejercicio #5: NUMEROS PARES DEL 0-100
/*
for(var i= 0 ; i<=100 ; i++ ){
	if(i%2===0){
		document.write(i+" , ");
	}
}
*/

//WHILE
/*
 var  i =0 ; 
 while(i<=100){
 	if(i%2===0){
 		document.write(i+"<br>")
 	}
 	i++;
 }
*/


 //DO WHILE
 /*
var i = 0;
do{
	if(i%2===0){
		document.write(i+"<br>");
	}
	i++;
}while(i<=100);
*/




//Ejercicio #6: TRIANGULO




//Ejercicio #7: TABLAS DE MULTIPLICAR






//Ejercicio #8: ELEVAR UN NUMERO ENTERO A LA "N" POTENCIA




//Ejercicio #9: CALIFICACIONES ALUMNOS




//Ejercicio #10: CUBO Y CUARTA DE UN NUMERO
