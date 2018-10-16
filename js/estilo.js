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
	
	if(pegafan()>=500)$('#opcoes').append('<li id="teknisa" >Teknisa</li>');

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
		if(empresa==1){
			empresa='Teknisa';
		}
		$('#opcoes').append('<ul><li>Atual empresa : <strong>'+empresa+'</strong></li><li>Salário: <em class="verde">+$'+sal()+'</em></li><li>Sites feitos para próxima promoção:</li><br><div class="progress"><div class="progress-bar bg-success" role="progressbar" style="width: '+vez()+'%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div></ul>');
		if(vez()>=10){
		$('#opcoes').append('<button id="promoção">Pegar Promoção</button>');	
		}
	}

			
}
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
				
			$('#comprar-texto').html('Deseja comprar um Setup melhor por <em class="vermelho">$5.000</em>?');
			$('#comprar').modal();
			$('#comprar').on('click','#comprar-botao',function(){
				if(localStorage.getItem('dinheiro')>=5000){
					maisdinheiro(-5000);
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