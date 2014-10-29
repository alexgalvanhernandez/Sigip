


function iniciar()
{

	var canvas = document.getElementById("c");
	if (canvas && canvas.getContext) {
		canvas.width = 800;
		canvas.height = 450;
		document.getElementById("c").style.background="#515151"
		var contexto = canvas.getContext("2d");
		if (contexto) {
			contexto.font="100px Verdana";
			contexto.lineWidth = 1.0;
			contexto.fillStyle = "white";
			contexto.stroleStyle = "black";
			contexto.fillText("CANVAS",200,250)


			}

	}

	
}
