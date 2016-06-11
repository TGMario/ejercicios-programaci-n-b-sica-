function perro(minimo, maximo)
{

	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );

	return numero;
} 
var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;
var opcionMaquina = perro(0,2);


opcionUsuario = prompt("¿Que eliges?\npiedra: 0\npapel: 1\ntijera: 2", 0);

alert("elegiste "+ opciones[opcionUsuario]);
alert("javascrip eligió " + opciones[opcionMaquina]);

if (opcionUsuario == piedra)
{
	if (opcionMaquina == piedra) 
	{
		alert("Empate");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Perdiste");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Ganaste");
	}
}
else if (opcionUsuario == papel)
{
	if (opcionMaquina == piedra) 
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Empate");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Perdiste");
	}
}
else if (opcionUsuario == tijera)
{
	if (opcionMaquina == piedra) 
	{
		alert("Perdiste");
	}
	else if (opcionMaquina == papel) 
	{
		alert("Ganaste");
	}
	else if (opcionMaquina == tijera) 
	{
		alert("Empate");
	}
}
else
{
	alert("!pendejo te eqivocaste!")
}
