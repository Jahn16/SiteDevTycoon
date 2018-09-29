
$('#controles').on("click","#logar",function(){

	$('#controles').empty();
	$('#controles').html('<h1>Login</h1><label for="nome">Nome do Usuário  </label><input type="text" id="nome"><br><label for="empresa">Nome Da Empresa</label><input type="text" id="empresa"><a href="index.html"><button id="voltar" class="btn btn-secondary login">Voltar</button></a><button id="login-pronto"  class="btn btn-primary login">Pronto</button>');

	
});
$('#controles').on("click", "#login-pronto", function(e) {
	
	let usuario = $('#nome').val();
	let empresa = $('#empresa').val();
	localStorage.setItem('usuario',usuario);
	localStorage.setItem('empresa',empresa);
	$('#controles').html('<h1>Site Development</h1><a href="jogo.html"><button type="button" class="btn btn-outline-success inicio">Jogar</button></a> <button class="btn btn-outline-success inicio" id="logar">Logar</button><button type="button" class="btn btn-outline-success inicio" data-toggle="modal" data-target="#exampleModal">Regras</button>');
	
});