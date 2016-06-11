	//alert("hi mamá la misha hizo popo!!!")	
var peso;

var pesoEnMarte;

alert("¿Quieres saber cual es tu peso en Marte Kg?", " 70");

peso= prompt("¿Cual es tu peso en Kg?");

peso= parseInt(peso);

pesoEnMarte= (peso / 9.81) * 3.711;

alert ("Tu peso en marte es: " + pesoEnMarte + " Kg.");