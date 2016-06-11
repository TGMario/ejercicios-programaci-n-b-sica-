var piedra = 0;

var papel = 1;

var tijera = 2;

var opciones = ["piedra", "papel", "tijera"];

var opcionUsuario;

var opcionOrdenador = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\n piedra:0\n papel:1\n tijera:2", 0);

alert("Elegiste " + opciones[opcionUsuario]);

alert("ordenador eligió " + opciones[opcionOrdenador]);

if(opcionUsuario == piedra)

{
	if(opcionOrdenador == piedra)
	{
		alert(!empate!);
	}
	else if(opcionOrdenador == papel)
	{
		alert(!perdiste!);
	}
	else if(opcionOrdenador= tijera)
	{
		alert(!Ganaste!);
	}
}
else if (opcionUsuario== papel)
{
		if(opcionOrdenador == piedra)
	{
		alert(!Ganaste!);
	}
	else if(opcionOrdenador == papel)
	{
		alert(!empate!);
	}
	else if(opcionOrdenador= tijera)
	{
		alert(!perdiste!);
}
else if (opcionUsuario== tijera)
{
		if(opcionOrdenador == piedra)
	{
		alert(!perdiste!);
	}
	else if(opcionOrdenador == papel)
	{
		alert(!Ganaste!);
	}
	else if(opcionOrdenador= tijera)
	{
		alert(!Empate!);
}
