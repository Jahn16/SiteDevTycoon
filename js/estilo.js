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
	
	$('#opcoes').append('<table><tr><th>Empresa</th><th>Salário</th><th>Promoção</th></tr><tr id="teknisa"><td>Teknisa</td><td>$3.000</td><td>$6.000</td></tr></table>');
	
});
$('#opcoes').on('click','.esquerda',function(){
	
	setup();
});
$('#opcoes').on('click','#teknisa',function(){
	chamarcompra('Confirmar contratação','Tem certeza que deseja mesmo trabalhar na <strong>Teknisa</strong>?','Confirmar');
	
		
		$('comprar-botao').click(function(){
			localStorage.setItem('emprego',1);
		});

});
function start(){
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