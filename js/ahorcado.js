var palabra = "Tamarindo";
//declaracion de la calse ahorcado
var hombre;
var Ahorcado = function(con)
{
	//this es las variables locales de la clase, accesibles en toda la clase
	//this.contexto es el context de dibujo del canvas que llega por parametro desde la variable con.
	this.contexto=con;
	this.maximo=5;
	this.intentos=0;
	this.dibujar();
	this.vivo = true;
}
Ahorcado.prototype.dibujar = function ()
{
	var dibujo = this.contexto;

	//Dibujando el poste
	dibujo.beginPath();
	//lleva el cursor al lugar correcto
	dibujo.moveTo(150,100);
	//Dibuja una linea 
	dibujo.lineTo(150,50);
	dibujo.lineTo(400,50);
	dibujo.lineTo(400,350);
	dibujo.lineWidth = 10;
	dibujo.strokeStyle="#616161"
	dibujo.stroke();	
	dibujo.closePath();

	if (this.intentos>0) 
	{
		//intentos = 1 rostro.
		dibujo.beginPath();
		dibujo.arc( 150, 140, 40, 0, Math.PI * 2, false);
		dibujo.strokeStyle = "#58A62B";
		dibujo.lineWidth = 6;
		dibujo.stroke();
		dibujo.closePath();
		if (this.intentos>1) 
		{
			//dibujar torzo
			dibujo.beginPath();
			//lleva el cursor al lugar correcto
			dibujo.moveTo(150,180);
			//Dibuja una linea 
			dibujo.lineTo(150,250);
			dibujo.strokeStyle = "#58A62B";
			dibujo.lineWidth = 6;
			dibujo.stroke();
			dibujo.closePath();
			if (this.intentos>2) 
			{
				//dibujar las manitas
				dibujo.beginPath();
				//lleva el cursor al lugar correcto
				dibujo.moveTo(110,200);
				//Dibuja una linea 
				dibujo.lineTo(150,190);
				dibujo.lineTo(190,200);
				dibujo.strokeStyle = "#58A62B";
				dibujo.lineWidth = 6;
				dibujo.stroke();
				dibujo.closePath();
				if (this.intentos>3) 
				{
					//dibujar las piecitos
					dibujo.beginPath();
					//lleva el cursor al lugar correcto
					dibujo.moveTo(110,270);
					//Dibuja una linea 
					dibujo.lineTo(150,250);
					dibujo.lineTo(190,270);
					dibujo.strokeStyle = "#58A62B";
					dibujo.lineWidth = 6;
					dibujo.stroke();
					dibujo.closePath();
					if (this.intentos>4) 
					{
						//dibujar el Izquierdo
						dibujo.beginPath();
						dibujo.moveTo(125,120);
						dibujo.lineTo(145,145);
						dibujo.moveTo(145,120);
						dibujo.lineTo(125,145);
						//dibujar el Derecho
						dibujo.moveTo(155,120);
						dibujo.lineTo(175,145);
						dibujo.moveTo(175,120);
						dibujo.lineTo(155,145);
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();

						

						//DIBUJAR LA TRISTESA
						dibujo.beginPath();


						dibujo.arc( 150, 170, 15,  1.1 * Math.PI, 1.9 * Math.PI, false);
						dibujo.lineWidth = 6;
						dibujo.strokeStyle = "blue";
						dibujo.stroke();
						dibujo.closePath();
					}
				}

				

			}
		}


	}


}
Ahorcado.prototype.trazar = function()
{
	this.intentos++;
	if (this.intentos >= this.maximo) 
	{
		this.vivo=false;
		alert("!Estas muerto!");
	}
	this.dibujar();
}

function iniciar()
{
	var canvas = document.getElementById("c");
	canvas.width = 500;
	canvas.height = 400;
	
	
	var contexto = canvas.getContext("2d");
	hombre = new Ahorcado(contexto);
	palabra = palabra.toUpperCase();
}