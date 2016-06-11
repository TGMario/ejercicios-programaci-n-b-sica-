var draw, lienso, t, b;
function inicio()
{
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo")
	draw = document.getElementById("dibujo");
	lienso = draw.getContext("2d");
	
	b.addEventListener("click", dibujarGrilla)

	dibujarGrilla(lienso);

	/*lienso.moveTo(100,100);
	lienso.lineTo(200,150);
	lienso.lineTo(150,200);
	lienso.lineTo(100,100);
	lienso.strokeStyle = "#FF0000";
	lienso.stroke();
	
	lienso.beginPath();
	lienso.moveTo(80,80);
	lienso.lineTo(190,140);
	lienso.lineTo(140,190);
	lienso.lineTo(80,80);
	lienso.strokeStyle = "#00FF00";
	lienso.stroke();
	
	lienso.beginPath();
	lienso.moveTo(70,70);
	lienso.lineTo(180,130);
	lienso.lineTo(130,180);
	lienso.lineTo(70,70);
	lienso.strokeStyle = "#FFFF00";
	lienso.stroke();
	//minuto 22 canvas*/
	lienso.beginPath();
	lienso.strokeStyle = "#000000";
	lienso.fillStyle = "#CC00EE";
	lienso.arc(150,150,140, (Math.PI *2), false);
	lienso.closePath();
	lienso.fill();
	lienso.stroke();


	function dibujarGrilla()
	{

		var g = lienso;
		var rayas = Number(t.value);
		var ancho = 300, alto = 300;
		var linea;
		var lineas = ancho/rayas;
		var limiteX = ancho / lineas;
		var limiteY = alto / lineas;

		for(linea = 0; linea <= limiteX; linea++) 
		{
			g.beginPath();
			g.strokeStyle = "#AAA";
			g.moveTo(0,linea*30);
			g.lineTo(300,linea*30);
			g.closePath();
			g.stroke();
		}
		for(linea = 0; linea <= limiteY; linea++) 
		{
			g.beginPath();
			g.strokeStyle = "#0000FF";
			g.moveTo(linea*30,0);
			g.lineTo(linea*30,300);
			g.closePath();
			g.stroke();
		}
	}
}