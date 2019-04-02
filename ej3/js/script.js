var tiempo;
var tiempo2;
var tiempo3;
function disable(){
	document.getElementById("desactivar").disabled = true;
	tiempo = setTimeout(activar,5000);
	tiempo2 = setTimeout(imagen,2000);
	tiempo3 = setTimeout(txt,1000);
	document.body.style.backgroundImage = "url(https://cdn-images-1.medium.com/max/2600/1*0KFB17_NGTPB0XWyc4BSgQ.jpeg)";
	var div = document.createElement("div");
	document.body.appendChild(div);
	document.getElementsByTagName("div")[0].style.background = "#f00";
	document.getElementsByTagName("div")[0].style.width = "300px";
	document.getElementsByTagName("div")[0].style.height = "300px";
	document.getElementsByTagName("div")[0].innerHTML="<p>hola</p>";


}

function activar(){
	document.getElementById("desactivar").disabled = false;
	clearInterval(tiempo);
}
function imagen(){
	document.body.style.backgroundImage = "none";
	document.getElementsByTagName("div")[0].style.display = "none";
}
function txt(){	
	document.getElementsByTagName("p")[0].style.display = "none";
}