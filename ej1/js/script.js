var t=null;
var width= 300;
var height= 300;
var v;
function btn(){
v = window.open("","_blank","width:300","height:300");
	v.resizeTo(300,300);
	v.addEventListener('resize', function () {
	    v.resizeTo(300,300);
	});
	v.status="";
	console.log(v.status);
} 


