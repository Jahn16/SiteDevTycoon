$('#opcoes').on("click", "#aprender", function() {
	$('#voltar').fadeIn();
	limpa();

	document.querySelector("#opcoes").innerHTML = "<h1 class='config'>Aprender qual linguagem?</h1>"
	
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-primary' id='css'>CSS</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-success' id='js'>JavaScript</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-danger' id='php'>PHP</button>";
	
	$('#opcoes').on('click','#css',function(){
			
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>CSS</strong> por <em class="vermelho">$15.000</em>?');
			$('#comprar').modal();

			$('#comprar').off('click', '#comprar-botao').on('click','#comprar-botao',function(){
			
			if(localStorage.getItem('conhecimento').search('CSS')==-1){

			if(pegadinheiro()>=15000){
			maisdinheiro(-15000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+CSS');
			
			}
			else {

			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
	
		
	
		
		}
		else {

		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		
	}
	
	});
	});

		$('#opcoes').on('click','#js',function(){
			
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>JS</strong> por <em class="vermelho">$100.000</em>?');
			$('#comprar').modal();
			$('#comprar').off('click', '#comprar-botao').on('click','#comprar-botao',function(){
				
				
			if(localStorage.getItem('conhecimento').search('JS')==-1){

			if(pegadinheiro()>=100000){
			maisdinheiro(-100000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+JS');
			
			}
			else {

			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
			
		}
	
		
		
		
		}
		else {

		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		
	}
	return 0;
	});
	});

		$('#opcoes').on('click','#php',function(){
			
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>CSS</strong> por <em class="vermelho">$200.000</em>?');
			$('#comprar').modal();
			$('#comprar').off('click', '#comprar-botao').on('click','#comprar-botao',function(){
			
			if(localStorage.getItem('conhecimento').search('PHP')==-1){
				
			if(pegadinheiro()>=200000){
			maisdinheiro(-200000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+PHP');
			
			}
			else {

			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
	
		
	
		
		}
		else {

		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		
	}
	
	});
	});
});
$('#controles-menu').on('click','#voltar',function(){
	voltamenu();
	$('#voltar').fadeOut();
});
function voltamenu(){
	limpa();
	din();

	inicio();
	
	$('#dinheiro').html('$'+pegadinheiro());
	$('#fansh2').html('<img src="imgs/Users.png" id="fansimg"><h2 id="fans">'+pegafan()+'</h2>');
}
function admin(){
	$('body').append('<div id="senha"><input type="text" id="admin"></input></div>');
	let senha = document.getElementById("admin");

	senha.addEventListener("keydown", function (e) {
    	if (e.keyCode === 13) {  
        validar(e);
   	 }
   	 	if (e.keyCode === 27) {  
        $('#senha').empty();
   	 }
});

function validar(e) {
    let senha = e.target.value;
  	if(senha=='admin'){
  		localStorage.setItem('admin','1');

  	}
  	if(senha=='us'){
  		localStorage.setItem('admin','0');

  	}
  	$('#senha').empty();

}
}