function sheldon(minimo, maximo)
{

	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );

	return numero;
} 
var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
var opcionUsuario;
var opcionMaquina = sheldon(0,4);

opcionUsuario = prompt("¿Qué eligues?\npiedra: 0\npapel: 1\ntijera: 2\nlagarto: 3\nspock: 4", 0);
alert("!Elegisté! " + opciones[opcionUsuario]);
alert("!Sheldon Cooper eligio! " + opciones[opcionMaquina]);

if(opcionUsuario==opcionMaquina)
{
	alert("!EMPATE!")
}
else if (opcionUsuario== piedra && opcionMaquina!=spock)
{
	alert("!GANASTE!");
}
else
{
	alert("!perdiste!")
}