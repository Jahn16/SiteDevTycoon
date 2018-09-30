$('#opcoes').on("click", "#aprender", function() {
	limpa();

	document.querySelector("#opcoes").innerHTML = "<h1>Aprender qual linguagem?</h1>"
	
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-primary' id='css'>CSS</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-success' id='js'>JavaScript</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-danger' id='backend'>BackEnd</button>";
})