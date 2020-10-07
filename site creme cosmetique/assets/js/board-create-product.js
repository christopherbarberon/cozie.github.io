let cornichonsVar = false;
let orangeVar = false;
let pastequeVar = false;

function stockVar() {
	let resultatHis1 = document.getElementById('resultat1').innerHTML; 
	let resultatHis2 = document.getElementById('resultat2').innerHTML; 
	let resultatHis3 = document.getElementById('resultat3').innerHTML; 

	var transfereLocal1 = localStorage.setItem("resultat1", resultatHis1);
	var transfereLocal2 = localStorage.setItem("resultat2", resultatHis2);
	var transfereLocal3 = localStorage.setItem("resultat3", resultatHis3);

}

function cornichons() {
	if (document.getElementById("resultat1").innerHTML == "Orange" || document.getElementById("resultat1").innerHTML == "Pasteque") {
		if (document.getElementById("resultat2").innerHTML == "Orange" || document.getElementById("resultat2").innerHTML == "Pasteque") {
				document.getElementById("resultat3").innerHTML = "Cornichons";
				document.getElementById("preview-image").src = 'images/1.png';
				cornichonsVar = true;
			
		} else {
				document.getElementById("resultat2").innerHTML = "Cornichons";
				document.getElementById("preview-image").src = 'images/1.png';
				cornichonsVar = true;
		}
	} else {
			document.getElementById("resultat1").innerHTML = "Cornichons";
			document.getElementById("preview-image").src = 'images/1.png';
			cornichonsVar = true;
		}

		if (cornichonsVar && orangeVar && !pastequeVar) {
			document.getElementById("preview-image").src = 'images/6.png';
		} else if(cornichonsVar && pastequeVar &&!orangeVar) {
			document.getElementById("preview-image").src = 'images/5.png';
		} else if (cornichonsVar && pastequeVar && orangeVar) {
			document.getElementById("preview-image").src = 'images/7.png';
		}
}
function orange() {  
	if (document.getElementById("resultat1").innerHTML == "Cornichons" || document.getElementById("resultat1").innerHTML == "Pasteque") {
		if (document.getElementById("resultat2").innerHTML == "Cornichons" || document.getElementById("resultat2").innerHTML == "Pasteque") {
				document.getElementById("resultat3").innerHTML = "Orange";
				document.getElementById("preview-image").src = 'images/3.png';
				orangeVar = true;
	} else {
				document.getElementById("resultat2").innerHTML = "Orange";
				document.getElementById("preview-image").src = 'images/3.png';
				orangeVar = true;
		}
	} else {
			document.getElementById("resultat1").innerHTML = "Orange";
			document.getElementById("preview-image").src = 'images/3.png';
			orangeVar = true;
		}	

		if (cornichonsVar && orangeVar && !pastequeVar) {
			document.getElementById("preview-image").src = 'images/6.png';
		} else if(orangeVar && pastequeVar && !cornichonsVar) {
			document.getElementById("preview-image").src = 'images/4.png';
		} else if (cornichonsVar && pastequeVar && orangeVar) {
			document.getElementById("preview-image").src = 'images/7.png';
		}	
}	
function pasteque() {


	if (document.getElementById("resultat1").innerHTML == "Cornichons" || document.getElementById("resultat1").innerHTML == "Orange") {
		if (document.getElementById("resultat2").innerHTML == "Cornichons" || document.getElementById("resultat2").innerHTML == "Orange") {
				document.getElementById("resultat3").innerHTML = "Pasteque";
				document.getElementById("preview-image").src = 'images/2.png';
				pastequeVar = true;
	} else {
				document.getElementById("resultat2").innerHTML = "Pasteque";
				document.getElementById("preview-image").src = 'images/2.png';
				pastequeVar = true;
		}
	} else {
			document.getElementById("resultat1").innerHTML = "Pasteque";
			document.getElementById("preview-image").src = 'images/2.png';
			pastequeVar = true;
		}	
		if (pastequeVar && orangeVar && !cornichonsVar) {
			document.getElementById("preview-image").src = 'images/4.png';
		} else if(cornichonsVar && pastequeVar && !orangeVar) {
			document.getElementById("preview-image").src = 'images/5.png';
		} else if (cornichonsVar && pastequeVar && orangeVar) {
			document.getElementById("preview-image").src = 'images/7.png';
		}
}