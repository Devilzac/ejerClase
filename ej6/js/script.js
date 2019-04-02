
var txt;
var ventana;
function muestra(){
	ventana=window.open("","_blank","width=900, height=900");
	txt += "<p>Browser CodeName: " + navigator.appCodeName + "</p>";
	txt += "<p>Browser Name: " + navigator.appName + "</p>";
	txt += "<p>Browser Version: " + navigator.appVersion + "</p>";
	txt += "<p>Cookies Enabled: " + navigator.cookieEnabled + "</p>";
	txt += "<p>Browser Language: " + navigator.language + "</p>";
	txt += "<p>Browser Online: " + navigator.onLine + "</p>";
	txt += "<p>Platform: " + navigator.platform + "</p>";
	txt += "<p>User-agent header: " + navigator.userAgent + "</p>";
	txt+="<p>Available Height: " + screen.availHeight+"</p>";
	txt+="<p>Available availWidth: " + screen.availWidth+"</p>";
	txt+="<p>colorDepth: " + screen.colorDepth+"</p>";
	txt+="<p>Height: " + screen.height+"</p>";
	txt+="<p>width: " + screen.width+"</p>";
	txt+="<p>pixelDepth: " + screen.pixelDepth+"</p>";
	txt+="<p>Available Height: " + screen.availHeight+"</p>";
	txt+="<p>Available Height: " + screen.availHeight+"</p>";
	txt+="<p>Available Height: " + navigator+"</p>";


		  if (navigator.geolocation) {
		  	setTimeout(function(){
		  		console.log(navigator.geolocation.getCurrentPosition(showPosition));
		  	},500);
		    
		  } else { 
		    txt+= "Geolocation is not supported by this browser.";
		  }

	


	ventana.document.write(txt);

}

function showPosition(position) {
	var t;
  t = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude; 


	ventana.document.write(t);
 
}
