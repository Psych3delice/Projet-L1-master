function init(){
	window.mt = document.getElementById("mailto").href;
	document.getElementById("mailto").href="";
}

function infos_nav(){
	window.alert("Version du navigateur : " + 
		navigator.userAgent + 
		"\nRésolution de l'écran : " + 
		window.screen.height + 
		" x " + 
		window.screen.width);
}

function imgSwitch(){
	var tmp=document.getElementById('img1').src;
	document.getElementById('img1').src=document.getElementById('img2').src;
	document.getElementById('img2').src=tmp;
}

function captcha(){
	var random1 = Math.floor((Math.random()*9)+1);
	var random2 = Math.floor((Math.random()*9)+1);
	var tot = random1 * random2;
	var result = parseInt(prompt("Hep hep hep...êtes vous humain ? \n                   " + random1 + " x " + random2 + " = ?"));
	if (result != tot) {
		window.alert("Hum...Essaie encore.");
		document.getElementById("mailto").href="";
		return; 
	}
	else {
		document.getElementById("mailto").href = window.mt;
		return;
	}
}
