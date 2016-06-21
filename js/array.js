
//Ejercicio: Arreglos


// EJERCICIO 1  DOCUMENTO DNI






//EJERCICIO 2 CICLO FOR
/*
var nombre = ["doris","camila","sthefy","sandra"];
nombre.push("mitzy","valentina","daniela");
var i ;
for(i=0 ; i<nombre.length ; i++){
	alert(nombre[i]+"-");
}
*/

//Ejercicio #3: Creando arrays 
/*
var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var i ;
for(i=0 ; i<12 ; i++){
	alert("El mes es : "+ meses[i]);
}
*/


//Ejercicio #4: Operaciones en arrays



//Ejercicio #5: Suma de números 
var numero;
var total;
var i;
total = 0 ; 
for(i=1 ; i<=10 ; i++){
	numero = parseInt(prompt("Inserte el numero "+i));
	total = total + numero;
}
alert("La suma es : "+ total);
