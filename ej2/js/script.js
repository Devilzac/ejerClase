
var cnt= [];
var v = window.setInterval(function(){
cnt.push(window.open("http://www.google.com","","width:500","height:500"));
}, 5000);




function stop(){
	for (var i = 0; i >= cnt.length; i++) {
		cnt[i].close();
	}

	clearInterval(v);
}