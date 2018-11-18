$('#opcoes').on('click','#estilo',function(){
	limpa();
	$('#voltar').fadeIn();
	if (!localStorage.getItem('e')) {
			localStorage.setItem('e',1);
			localStorage.setItem('vezes',0);
			localStorage.setItem('cp',0);
			localStorage.setItem('emprego',0);
			}
			setup();
			
});	
$('#opcoes').on('click','.direita',function(){
	limpa();
	$('#opcoes').html('<img src="imgs/larrow.png" class="esquerda"><h1 class="config">Propostas de Emprego</h1>');
	
	if(pegafan()>=500)$('#opcoes').append('<ul><li id="teknisa" class="empregos">Teknisa</li><li id="google" class="empregos">Google</li><li id="micro" class="empregos">Microsoft</li></ul>');

	else $('#opcoes').append('<p>Parece que você não chamou atenção de nenhuma empresa ainda. <br>Consiga 500 fãs para desbloquear essa aba.</p>');
	
});
$('#opcoes').on('click','.esquerda',function(){
	
	setup();
});
$('#opcoes').on('click','#teknisa',function(){
	chamarcompra('Confirmar contratação','Tem certeza que deseja mesmo trabalhar na <strong>Teknisa</strong>?<br><br><strong>Salário:</strong><em class="verde">+$3000</em><br><strong>Aumento de salário por promoção:</strong><em class="verde">+$1000</em>','Confirmar');
	
		
		$('#comprar').on('click','#comprar-botao',function(){
			localStorage.setItem('emprego',1);
			localStorage.setItem('salario',3000);
			localStorage.setItem('pixel','<img src="imgs/cafe.png" id="avatar">');
			$('#sprite').html(localStorage.getItem('pixel'));
			localStorage.setItem('trabalho',0);
			localStorage.setItem('vezes',0);
		});

});
$('#opcoes').on('click','#google',function(){
		chamarcompra('Confirmar contratação','Tem certeza que deseja mesmo trabalhar na <strong>Google</strong>?<br><br><strong>Salário:</strong><em class="verde">+$5000</em><br><strong>Aumento de salário por promoção:</strong><em class="verde">+$500</em>','Confirmar');
	
		
		$('#comprar').on('click','#comprar-botao',function(){
			localStorage.setItem('emprego',2);
			localStorage.setItem('salario',5000);
			localStorage.setItem('pixel','<img src="imgs/cafe.png" id="avatar">');
			$('#sprite').html(localStorage.getItem('pixel'));
			localStorage.setItem('trabalho',0);
			localStorage.setItem('vezes',0);
		});

});
$('#opcoes').on('click','#micro',function(){
		chamarcompra('Confirmar contratação','Tem certeza que deseja mesmo trabalhar na <strong>Microsoft</strong>?<br><br><strong>Salário:</strong><em class="verde">+$7000</em><br><strong>Aumento de salário por promoção:</strong><em class="verde">+$250</em>','Confirmar');
	
		
		$('#comprar').on('click','#comprar-botao',function(){
			localStorage.setItem('emprego',3);
			localStorage.setItem('salario',7000);
			localStorage.setItem('pixel','<img src="imgs/cafe.png" id="avatar">');
			$('#sprite').html(localStorage.getItem('pixel'));
			localStorage.setItem('trabalho',0);
			localStorage.setItem('vezes',0);
		});

});
function start(){
	if(localStorage.getItem('emprego')==0){
	$('#opcoes').html('<img src="imgs/rarrow.png" class="direita"><h1 class="config">Mudar Setup</h1>');
		let status = pegac();
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
	else {
		$('#opcoes').html('<img src="imgs/rarrow.png" class="direita"><h1 class="config">Situação no atual emprego</h1>');
		let empresa =  localStorage.getItem('emprego');
		let trabalho = localStorage.getItem('trabalho');
		if(empresa==1){
			empresa='Teknisa';
		}
		if(empresa==2){
			empresa='Google';
		}
		if(empresa==3){
			empresa='Microsoft';
		}
		if(trabalho==0){
			trabalho='Fazedor de Café';
		}
		else if(trabalho==1){
			trabalho='Programador';
		}
		$('#opcoes').append('<ul><li>Atual empresa : <strong>'+empresa+'</strong></li><li>Cargo : <strong>'+trabalho+'</strong></li><li>Salário: <em class="verde">+$'+sal()+'</em></li><li>Sites feitos para próxima promoção:</li><br><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: '+vez()*20+'%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></ul>');
		if(vez()>=5){
		$('#opcoes').append('<button id="promocao" class="btn btn-success">Pegar Promoção</button>');	
		}
	}

			
}
$('#opcoes').on('click','#promocao',function(){
	localStorage.setItem('vezes',0);
	let aumento=sal();
	if(localStorage.getItem('emprego')==1){
		aumento+=1000;
		if(localStorage.getItem('trabalho',0)){
			localStorage.setItem('pixel','<img src="imgs/teknisa1.png" id="avatar">');
		}
	}
	if(localStorage.getItem('emprego')==2){
		aumento+=500;
		if(localStorage.getItem('trabalho',0)){
			localStorage.setItem('pixel','<img src="imgs/google.jpg" id="avatar">');
		}
	}
	if(localStorage.getItem('emprego')==3){
		aumento+=250;
		if(localStorage.getItem('trabalho',0)){
			localStorage.setItem('pixel','<img src="imgs/microsoft.png" id="avatar">');
		}
	}
	localStorage.setItem('salario',aumento);
	$('#sprite').html(localStorage.getItem('pixel'));
	start();
});
function pegac(){
	return parseInt(localStorage.getItem('cp'));
}
function maisc(){
	let c = pegac();
	localStorage.setItem('cp',c+1);
}
function setup(){
start();
			$('#opcoes').on('click','#setup',function(){
				
			$('#comprar-texto').html('Deseja comprar um Setup melhor por <em class="vermelho">$30.000</em>?');
			$('#comprar').modal();
			$('#comprar').off('click', '#comprar-botao').on('click','#comprar-botao',function(){
				if(localStorage.getItem('dinheiro')>=30000){
					maisdinheiro(-30000);
					if(localStorage.getItem('cp')==0){
						maisc();
					localStorage.setItem('pixel','<img src="imgs/normal.png" id="avatar">');
					start();
					}
					else if(localStorage.getItem('cp')=='1'){
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
function chamarcompra(titulo,texto,botao){
	if(titulo!='')$('#comprar-titulo').html(titulo);
	if(texto!='')$('#comprar-texto').html(texto);
	if(botao!='')$('#comprar-botao').html(botao);
	$('#comprar').modal();
	$('#comprar').on('hidden.bs.modal', function () {
    $('#comprar-titulo').html('Confirmar compra');
    $('#comprar-botao').html('Comprar');
	})
}
function vez(){
	return parseInt(localStorage.getItem('vezes'));
}
