var tablero, direccion, li;
var fondo = {
	imagenURL:"fondo.png",
	imagenOK: false
};
var teclas ={
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGTH: 39	
};
var tifis ={
	x: 100,
	y: 100,
	frenteURL: "diana-frente.png",
	frenteOK: false,
	atrasURL: "diana-atras.png",
	atrasOK: false,
	derURL: "diana-der.png",
	derOK: false,
	izqURL: "diana-izq.png",
	izqOK: false,
	velocidad: 10

};
var liz ={
	x: 350,
	y: 200,
	lizURL: "liz.png",
	lizOK: false

};
function inicio()
{
	var canvas = document.getElementById("campo");
	tablero =  canvas.getContext("2d");

	fondo.imagen = new Image();
	fondo.imagen.src = fondo.imagenURL;
	fondo.imagen.onload = confirmarFondo;
	dibujar();
	tifis.frente = new Image();
	tifis.frente.src = tifis.frenteURL;
	tifis.frente.onload = confirmarFrente;

	tifis.atras = new Image();
	tifis.atras.src = tifis.atrasURL;
	tifis.atras.onload = confirmarAtras;
	
	tifis.izq = new Image();
	tifis.izq.src = tifis.izqURL;
	tifis.izq.onload = confirmarIzq;

	tifis.der = new Image();
	tifis.der.src = tifis.derURL;
	tifis.der.onload = confirmarDer;

	liz.lisy = new Image();
	liz.lisy.src = liz.lizURL;
	liz.lisy.onload = confirmarLiz;

	document.addEventListener("keydown", teclado);
}

function teclado(datos)
{
	var codigo = datos.keyCode;

	if(codigo == teclas.UP)
		{
			if(tifis.y >0)
			{
				tifis.y -= tifis.velocidad;
			}
		}
		if(codigo == teclas.DOWN)
		{ 
			if(tifis.y <450)
			{
				tifis.y += tifis.velocidad;
			}
		}
		if(codigo == teclas.RIGTH)
		{	
			if(tifis.x <460)
			{
				tifis.x += tifis.velocidad;
			}
		}
		if(codigo == teclas.LEFT)
		{
			if(tifis.x >=0)
			{
			tifis.x -= tifis.velocidad;
			}
		}

	direccion = codigo;
	
	dibujar();
}

function confirmarFondo()
{
	fondo.imagenOK = true;
	dibujar();

}
function confirmarFrente()
{
	tifis.frenteOK = true;
	dibujar();

}
function confirmarAtras()
{
	tifis.atrasOK = true;
	dibujar();

}
function confirmarIzq()
{
	tifis.izqOK = true;
	dibujar();

}
function confirmarDer()
{
	tifis.derOK = true;
	dibujar();

}
function confirmarLiz()
{
	liz.lisyOK = true;
	dibujar();

}
function dibujar ()
{
	if(fondo.imagenOK == true)
	{
		tablero.drawImage(fondo.imagen, 0, 0);
	}
	var tifiDibujo = tifis.frente;
	if(tifis.frenteOK && tifis.atrasOK && tifis.izqOK && tifis.derOK)
	{
		if(direccion == teclas.UP)
		{
			tifiDibujo = tifis.atras;
		}
		if(direccion == teclas.DOWN)
		{
			tifiDibujo = tifis.frente;
		}
		if(direccion == teclas.LEFT)
		{
			tifiDibujo = tifis.izq;
		}
		if(direccion == teclas.RIGTH)
		{
			tifiDibujo = tifis.der;
		}
		tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
	}
	if (liz.lisyOK == true)
	{
		tablero.drawImage(liz.lisy, liz.x, liz.y);
	}
}