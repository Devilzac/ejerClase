
window.addEventListener("keypress", keypressed, false);

function keypressed(e) {
    var keyCode = e.keyCode;
    console.log(e.key, keyCode);
    if(keyCode==100 || keyCode == 97){
    	alert("u are a noob");
    }
};