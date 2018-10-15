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
			$('#comprar').on('click','#comprar-botao',function(){

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
		if(localStorage.getItem('conhecimento').search('JS')==-1){
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>JS</strong> por <em class="vermelho">$100.000</em>?');
			$('#comprar').modal();
			
		
	}
	else {
		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		
	}
	$('#comprar').on('click','#comprar-botao',function(){
			if(pegadinheiro()>=100000){
			maisdinheiro(-100000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+JS');
			
		}
		else {
			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
		
		});
	});

	$('#opcoes').on('click','#php',function(){
		if(localStorage.getItem('conhecimento').search('PHP')==-1){
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>PHP</strong> por <em class="vermelho">$200.000</em>?');
			$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
			if(pegadinheiro()>=200000){
			maisdinheiro(-200000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+PHP');
			
		}
		else {
			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
		
		});
		$('#comprar').on('click','#fechar-botao',function(){
			
		});
	
		}
		else {
		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		
	}
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