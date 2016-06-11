//var FODA = [["FORTALEZA", "OPORTUNIDAD"],["DEBILIDAD", "DEBILIDAD"] ];
//document.write(FODA[1][1]);

function explision()
{
	alert("¡BOOM!!");
	document.write("<h1>¡BOOM!! Elegiste un area minada :(</h1>");
}
function ganaste()
{
	document.write("Eres un ganador:)");
}


var campo= [ [1, 0, 0 ] ,
			 [0, 1, 0 ] ,
			 [1, 0, 1 ] ];

//if(campo[0] [0]== 1)
//{
//	explision();
//}
//else
//{
//	ganaste();
//}
var textos =["Tierra", "Bomba"]
var x, y;

alert("Estas en un campo minado\n"+
	"Elije una posición entre el 0 y el 2 para X & Y ");

x = prompt ("Posición en X? (entre 0 y 2)", 0);

y = prompt ("Posición en Y? (entre 0 y 2)", 0);

//var posición = campo [x][y];
//document.write( "elegiste " + textos[posición] );
if (x<3 && y<3)
{
	var posición = campo [x][y];
	document.write("Elegiste " + textos[posición] + "<br />");
	if(posición ==1)
	{
		explision();
	}
	else
	{
		ganaste();
	}
}	
else
{
	document.write("Te saliste del campo");	
	explision();
}
var posición = campo[x][y];