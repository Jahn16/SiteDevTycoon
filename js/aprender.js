$('#opcoes').on("click", "#aprender", function() {
	limpa();

	document.querySelector("#opcoes").innerHTML = "<h1>Aprender qual linguagem?</h1>"
	
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-primary' id='css'>CSS</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-success' id='js'>JavaScript</button>";
	document.querySelector("#opcoes").innerHTML += "<button class='btn btn-outline-danger' id='php'>PHP</button>";
	
	$('#opcoes').on('click','#css',function(){
		
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>CSS</strong> por <em class="vermelho">$20.000</em>?');
			$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){

			if(localStorage.getItem('conhecimento').search('CSS')==-1){

			if(localStorage.getItem('dinheiro')>=20000){
			maisdinheiro(-20000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+CSS');
			
		}
		else {

			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
	
		voltamenu();
	
		$('#comprar').on('click','#fechar-botao',function(){
			voltamenu();
		});
	}
	else {
		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		voltamenu();
	}
	});
	});
	$('#opcoes').on('click','#js',function(){
		if(localStorage.getItem('conhecimento').search('JS')==-1){
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>JS</strong> por <em class="vermelho">$100.000</em>?');
				$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
			if(localStorage.getItem('dinheiro')>=100000){
			maisdinheiro(-100000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+JS');
			
		}
		else {
			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
		voltamenu();
		});
		$('#comprar').on('click','#fechar-botao',function(){
			voltamenu();
		});
	}
	else {
		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		voltamenu();
	}
	});

	$('#opcoes').on('click','#php',function(){
		if(localStorage.getItem('conhecimento').search('PHP')==-1){
			$('#comprar-texto').html('Deseja comprar a linguagem <strong>PHP</strong> por <em class="vermelho">$200.000</em>?');
				$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
			if(localStorage.getItem('dinheiro')>=200000){
			maisdinheiro(-200000);
			localStorage.setItem('conhecimento',localStorage.getItem('conhecimento')+'+PHP');
			
		}
		else {
			$('#titulo-modal').html('Erro na compra');
			$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
			$('#myModal').modal();
		}
		voltamenu();
		});
		$('#comprar').on('click','#fechar-botao',function(){
			voltamenu();
		});
	
		}
		else {
		$('#titulo-modal').html('Erro na compra');
		$('#texto-modal').html('Você já tem essa linguagem.');
		$('#myModal').modal();
		voltamenu();
	}
	});
});
function voltamenu(){
	limpa();
	din();
	inicio();
	
	$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
}