$('#opcoes').on('click','#estilo',function(){
	limpa();
	if (!localStorage.getItem('e')) {
			localStorage.setItem('e',1);
			localStorage.setItem('vezes',0);
			localStorage.setItem('cpixel',0);
			$('#titulo-modal').html('Tutorial Estilo');
			$('#texto-modal').html('Tá na hora de colocar um estilo nesse teu programador,está um pouco jogado as traças não acha?<img src="imgs/pobre.jpg">');
			$('#fechar').html('Próximo');
			$('#myModal').modal();
			$('#myModal').on('click','#fechar',function(){
				$('#titulo-modal').html('Tutorial Estilo');
				$('#texto-modal').html('Mas antes escolha entre seguir sua própria StartUp,onde você será programador Full Time.<br>Ou ser contradado pela Teknisa, sua alma será consumida pela empresa  e seus sites ficariam com menor qualidade porém você ganhará um salário fixo de <em class="verde">$3000</em> inicialmente (aumenta conforme promoções).');
				$('#myModal').modal();
				$('#myModal').on('click','#fechar',function(){
					$('#texto-modal').html('Depois de feita escolha,essa aba servirá pra você ver o status da sua carreira(no caso de você ser um funcionário) e fazer um upgrade no seu quarto caso ser dono de uma startup');
					$('#myModal').modal();
					$('#fechar').html('Fechar');
				});
			});
			$('#voltar').fadeIn();
			$('#opcoes').html('<h1>Que vertente você irá seguir?');
			$('#opcoes').append('<button id="startup" class="btn btn-outline-info">Seguir sua própria Startup</button>');
			$('#opcoes').append('<button id="teknisa" class="btn btn-outline-success">Seguir carreira profissional</button>');
			$('#opcoes').on('click','#startup',function(){
				$('#titulo-modal').html('Confirmar');
				$('#texto-modal').html('Tem certeza que deseja criar sua própria Startup?');
				$('#fechar').html('Confirmar');
				$('#myModal').modal();
				$('#myModal').on('click','#fechar',function(){
					$('#fechar').html('Fechar');
					localStorage.setItem('emprego','0');
					
					start();
					$('#opcoes').on('click','#setup',function(){
				
			$('#comprar-texto').html('Deseja comprar um Setup melhor por <em class="vermelho">$10.000</em>?');
			$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
				if(localStorage.getItem('dinheiro')>=10000){
					maisdinheiro(-10000);
					if(localStorage.getItem('cpixel')=='0'){
						maisc();
					localStorage.setItem('pixel','<img src="imgs/normal.png" id="avatar">');
					}
					else if(localStorage.getItem('cpixel')=='1'){
						localStorage.setItem('pixel','<img src="imgs/rico.png" id="avatar">');
					}

					$('#sprite').html(localStorage.getItem('pixel'));

				}
					else {

				$('#titulo-modal').html('Erro na compra');
				$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
				$('#myModal').modal();
		}
			});
		});
				});
			});
			$('#opcoes').on('click','#teknisa',function(){
				$('#titulo-modal').html('Confirmar');
				$('#texto-modal').html('Tem certeza que deseja trabalhar na Teknisa?');
				$('#fechar').html('Confirmar');
				$('#myModal').modal();
				$('#myModal').on('click','#fechar',function(){
					$('#fechar').html('Fechar');
					localStorage.setItem('emprego','1');
					teknisa();
					localStorage.setItem('salario','3000');
				});
			});

		}

		else if (emp()=='0'){
			start();
			$('#opcoes').on('click','#setup',function(){
				
			$('#comprar-texto').html('Deseja comprar um Setup melhor por <em class="vermelho">$10.000</em>?');
			$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
				if(localStorage.getItem('dinheiro')>=10000){
					maisdinheiro(-10000);
					if(localStorage.getItem('cpixel')=='0'){
						maisc();
					localStorage.setItem('pixel','<img src="imgs/normal.png" id="avatar">');
					start();
					}
					else if(localStorage.getItem('cpixel')=='1'){
						maisc()
						localStorage.setItem('pixel','<img src="imgs/rico.png" id="avatar">');
						start();
					}

					$('#sprite').html(localStorage.getItem('pixel'));

				}
					else {

				$('#titulo-modal').html('Erro na compra');
				$('#texto-modal').html('Não há dinheiro suficiente para comprar.');
				$('#myModal').modal();
		}
			});
		});
		}
		else if(emp()=='1'){
			teknisa();
		}
		$('#voltar').fadeIn();
	
});
function emp(){
	return localStorage.getItem('emprego');
}
function start(){
	$('#opcoes').html('<h1>Mudar Setup</h1>');
		let status = parseInt(localStorage.getItem('cpixel'));
		if(status==0){
			status='Pobre';
		}
		else if(status==1){
			status='Normal';
		}
		else if(status==2){
			status = 'Rico';
		}
			$('#opcoes').append('<h4>Status do Setup = '+status+'</h2><br><br><br><br>');
			$('#opcoes').append('<button id="setup" class="btn btn-success">Upgrade de Setup</button>');
			
}
function maisc(){
	localStorage.setItem('cpixel',parseInt(localStorage.getItem('cpixel'))+1);

}
function errofalta(){
	$('#titulo-modal').html('Erro na compra');
				$('#texto-modal').html('Já alcançou o máximo do setup');
				$('#myModal').modal();
}
function resetar(){
		localStorage.setItem('dinheiro',10000);
		localStorage.setItem('cpixel',0);
		localStorage.removeItem('e');
		localStorage.removeItem('es');
		localStorage.removeItem('d');
		localStorage.removeItem('salario');
		localStorage.removeItem('vezes');
		localStorage.setItem('conhecimento','HTML');
		localStorage.setItem('pixel','<img src="imgs/old.png" id="avatar">');

		$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));

	$('#sprite').html(localStorage.getItem('pixel'));
}
function teknisa(){
	localStorage.setItem('pixel','<img src="imgs/teknisa1.png" id="avatar">');
	$('#opcoes').html('<h1>Trabalhador da Teknisa</h1>');
	$('#opcoes').append('<h4>Emprego : Escravo</h4><br><br><br><br>');
	$('#opcoes').append('<p>Sites feitos até próxima promoção:</p>')
	if(vez()==10){
		localStorage.getItem('vezes',0);
		aumentasalario(1000);
	}
	$('#opcoes').append('<div class="progress" id="emprego"><div class="progress-bar" role="progressbar" aria-valuenow="0" style="width:'+vez()*10+'%"  aria-valuemin="0" aria-valuemax="100">'+vez()+' Site(s)</div></div>')
}
function vez(){
	return parseInt(localStorage.getItem('vezes'));
}
function aumentasalario(num){
	localStorage.set('salario',parseInt(localStorage.getItem('salario')+num));
}