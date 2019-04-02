var chrome = Boolean(window.chrome);
var firefox = navigator.userAgent.includes('Firefox');
var edge = navigator.userAgent.includes("Edge");

console.log("chrome: "+chrome);
console.log("firefox: "+firefox);
console.log("edge: "+edge);

setTimeout(function(){
	if(chrome && !edge){
		document.body.style.background ="#f00";
	}
	else if(firefox){
		document.body.style.background ="#0f0";
	}
	else if(edge){
		document.body.style.background ="#00f";
	}

},500);
