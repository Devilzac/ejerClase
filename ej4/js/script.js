var imagenes = [];
var contador = 0;
imagenes.push("https://http2.mlstatic.com/S_788633-MLC25593227554_052017-O.jpg");
imagenes.push("https://i0.wp.com/outdoormarketing.com.mx/wp-content/uploads/2018/04/Calaca-cuchillos-min.jpg");
imagenes.push("https://previews.123rf.com/images/vectorpocket/vectorpocket1609/vectorpocket160900093/65829746-colecci%C3%B3n-de-ilustraciones-de-calaveras-y-huesos-grabado-imprimir-para-camisetas.jpg");

setInterval(function(){
	if(contador<=imagenes.length-1){
		bg();
		//i=++i%colores.length
	}
	else{
		contador = 0;
		bg();
	}
	
},1000);




function bg(){

		console.log(imagenes[contador]);
		document.body.style.background = "url("+imagenes[contador]+")";
		document.body.style.backgroundSize  = "cover";
		document.body.style.backgroundRepeat  = "no-repeat";
		contador++;

}