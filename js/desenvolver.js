
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$('#avatar').click(function(){
	
	
	$('#sprite').html("<img src='imgs/programador3.png' id='avatar'>");
});



let teclado = new Audio('audio/sons/teclado.mp3');
let beep = new Audio('audio/sons/beep.wav');
let blop = new Audio('audio/sons/blop.mp3');
let caixa = new Audio('audio/sons/dinheiro.mp3');
let loading = new Audio('audio/sons/loading.mp3');
$(document).ready(function() {
	if (!localStorage.getItem('dinheiro')) {
		resetar();
		tutorial();
	}
	$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
	$('#fans').html(pegafan());
	$('#sprite').html(localStorage.getItem('pixel'));
	
	});

	$('#opcoes').on("click", "#desenvolver", function() {
	
		if (!localStorage.getItem('d')) {
			localStorage.setItem('d',1);
			$('#titulo-modal').html('Tutorial Desenvolver');
			$('#texto-modal').html('<p>Agora você é um <strong>Web Developer!</strong><br>Use todos seus conhecimentos de HTML , CSS , JavaScript e Marketing para criar um site interresante. ');
			$('#fechar').html('Próximo');
			$('#myModal').modal();
			$('#myModal').on('click','#fechar',function(){
				$('#titulo-modal').html('Tutorial Desenvolver');
				$('#texto-modal').html('<p>Escolha o tema que você achar mais legal.O tema em si não te dá mais ou menos dinheiro mas sim suas decisões com base nele.</p><img src="imgs/temas.png">');
				$('#myModal').modal();
				$('#myModal').on('click','#fechar',function(){
				$('#texto-modal').html('<p>Agora tendo em vista o tema que você escolheu e seus conhecimentos muito avançados de Marketing escolha o público que mais se interessaria no seu site.</p><img src="imgs/pa.png">');
				$('#myModal').modal();
					$('#myModal').on('click','#fechar',function(){
						$('#fechar').html('Fechar');
						$('#texto-modal').html('<p>Na etapa final,como um bom Programmer que é ,deverá selecionar as linguagens de programação usadas no seu site.<br>Por padrão,você só sabe HTML mas na aba <strong>Aprender</strong> no menu inicial é possível aprender CSS e JavaScript.</p><img src="imgs/lin.png">');
						$('#myModal').modal();

					});
			});
			});
		}
		
		somteclado();
		limpa();
		tema();
		
			$('#op3').click(function(){
	
				
				publico();
					$('#pa2').click(function(){
					limpa();
					programacoes();
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
							nomedosite();
								$('#enviar').click(function(){
									teclado.pause();
									let nota=7+vcss+vjs+vphp;
									let nome = $('#nomedosite').val();
									limpa();
									din();
									let ganho = Math.floor(Math.random() * nota*700);
									while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
									
									
									barra(0,nota,ganho,nome);
   			 						
								});
						});
				});
						$('#pa3').click(function(){
					limpa();
					programacoes();
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
								nomedosite();
								$('#enviar').click(function(){
									teclado.pause();
									let nota=6+vcss+vjs+vphp;
									let nome = $('#nomedosite').val();
									limpa();
									din();
									let ganho = Math.floor(Math.random() * nota*700);
									while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
									
									
   			 					
									barra(0,nota,ganho,nome);
   			 					
								});
						});
				});
				$('#pa1').click(function(){
					limpa();
					programacoes();
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
							nomedosite();
							$('#enviar').click(function(){
								teclado.pause();
								let nota=5+vcss+vjs+vphp;
								let nome = $('#nomedosite').val();
								limpa();
								din();
								let ganho = Math.floor(Math.random() * nota*700);
								while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
								
								barra(0,nota,ganho,nome);
   			 					
							


							});
						});
				});
				
			
			});
			$('#op2').click(function(){
		
			publico();

				$('#pa1').click(function(){
			
					limpa();
					programacoes();	
				
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
							nomedosite();

								$('#enviar').click(function(){
							
								teclado.pause();
								let nota=5+vcss+vjs+vphp;
								let nome = $('#nomedosite').val();
								limpa();
								din();
								let ganho = Math.floor(Math.random() * nota*700);
								while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
								
								barra(0,nota,ganho,nome);
   			 					
								
						});
				});	
		});
					$('#pa2').click(function(){
					limpa();
					programacoes();
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
							nomedosite();
								$('#enviar').click(function(){
									teclado.pause();
									let nota=6+vcss+vjs+vphp;
									let nome = $('#nomedosite').val();
									limpa();
									din();
									let ganho = Math.floor(Math.random() * nota*700);
									while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
									
									barra(0,nota,ganho,nome);
								});
						});
				});
						$('#pa3').click(function(){
					limpa();
					programacoes();
						$('#linguagem').click(function(){
							let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
							let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
							let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
							vcss = confere(vcss);
							vjs= confere(vjs);
							vphp = confere(vphp);
							nomedosite();
								$('#enviar').click(function(){
									teclado.pause();
									let nota=7+vcss+vjs+vphp;
									let nome = $('#nomedosite').val();
									limpa();
									din();
									let ganho = Math.floor(Math.random() * nota*700);
									while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
									
									barra(0,nota,ganho,nome);
   			 						
									
								});
						});
				});
	});


	$('#op1').click(function(){
		
		limpa();
		publico();

			
				
				$('#pa1').click(function(){
					limpa();
					programacoes();
					$('#inputjs').click(function() {
  						if ($(this).is(':checked')) {
  							if(localStorage.getItem('conhecimento').search('CSS')!=-1){
  								$("#inputcss").prop("checked", true);
  							}
  				}
  				});	
  					$('#inputphp').click(function() {
  						if ($(this).is(':checked')) {
  							if(localStorage.getItem('conhecimento').search('CSS')!=-1&&localStorage.getItem('conhecimento').search('JS')){
  								$("#inputjs").prop("checked", true);
  								$("#inputcss").prop("checked", true);
  							}
  				}		
				
  				});
					
					$('#linguagem').click(function(){
						let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
						let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
						let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
						vcss = confere(vcss);
						vjs= confere(vjs);
						vphp = confere(vphp);
						
						nomedosite();
						let href= 'sites/ovelha/html.html';
						if(vcss==1) href = 'sites/ovelha/css.html';
						if(vjs==1) href = 'sites/ovelha/js.html';
						$('#enviar').click(function(){
							if($('#nomedosite').val()!=''){
							teclado.pause();

							let nota=8+vcss+vjs+vphp;
							
							let nome = $('#nomedosite').val();
							limpa();
							din();
							let ganho = Math.floor(Math.random() * nota*700);
							while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
							
							barra(0,nota,ganho,nome,href);
						}
						else alert('Preencha o nome');
   			 				});
						});	
					});

					$('#pa2').click(function(){
					limpa();
					programacoes();

					$('#linguagem').click(function(){
						let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
						let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
						let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
						vcss = confere(vcss);
						vjs= confere(vjs);
						vphp = confere(vphp);
						nomedosite();
						let href= 'sites/ovelha/html.html';
						if(vcss==1) href = 'sites/ovelha/css.html';
						if(vjs==1) href = 'sites/ovelha/js.html';
						$('#enviar').click(function(){
							teclado.pause();
							let nota=6+vcss+vjs+vphp;
							let nome = $('#nomedosite').val();
							limpa();
							din();
							let ganho = Math.floor(Math.random() * nota*700);
							while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
							
							barra(0,nota,ganho,nome,href);
   			 				});
						});	
					});
					$('#pa3').click(function(){
					limpa();
					programacoes();

					$('#linguagem').click(function(){
						let vcss = $( "input[type=checkbox][name=css]:checked" ).val();
						let vjs =  $( "input[type=checkbox][name=js]:checked" ).val();
						let vphp =  $( "input[type=checkbox][name=php]:checked" ).val();
						vcss = confere(vcss);
						vjs= confere(vjs);
						vphp = confere(vphp);
						nomedosite();
						let href= 'sites/ovelha/html.html';
						if(vcss==1) href = 'sites/ovelha/css.html';
						if(vjs==1) href = 'sites/ovelha/js.html';
						$('#enviar').click(function(){

							teclado.pause();
							let nota=5+vcss+vjs+vphp;
							let nome = $('#nomedosite').val();
							limpa();
							din();
							let ganho = Math.floor(Math.random() * nota*700);
							while(ganho<nota*600) ganho = Math.floor(Math.random() * nota*700);
							
							barra(0,nota,ganho,nome,href);
   			 				});
						});	
					});
});


});

function inicio(){
					

					$('#opcoes').append('<button type="button" class="btn btn-outline-primary" id="desenvolver">Desenvolver Site</button>');
					$('#opcoes').append('<button type="button" class="btn btn-outline-success" id="aprender">Aprender</button>');
					$('#opcoes').append('<button type="button" class="btn btn-outline-danger" id="estilo">Carreira</button>');
}

function limpa(){
					$('#opcoes').empty();
}
function onClick(element) {
  				document.getElementById("img01").src = element.src;
 			 	document.getElementById("modal01").style.display = "block";
}
function din(){
	$('#opcoes').html("<h1 id='dinheiro'></h1>");
	$('#opcoes').append('<div id="fansh2"><h2 id="fans"></h2></div>');
}
function tema() {
	if(sound==0)beep.play();

		$('#opcoes').html("<h1 class='config'>Tema do Site:</h1>");
	
		$('#opcoes').append("<button class='btn btn-outline-primary' id='op1'>Raças Raras de Ovelhas</button>");
		$('#opcoes').append("<button class='btn btn-outline-success' id='op2'>Plantas Carnívoras</button>");
		$('#opcoes').append("<button class='btn btn-outline-danger' id='op3'>Coding Dojo</button>");
}
	function publico(){
		if(sound==0) beep.play();
		$('#opcoes').html("<h1 class='config'>Público Alvo:</h1>");
		$('#opcoes').append("<button class='btn btn-outline-primary' id='pa1'>Crianças</button>");
		$('#opcoes').append("<button class='btn btn-outline-success' id='pa2'>Adolescentes</button>");
		$('#opcoes').append("<button class='btn btn-outline-danger' id='pa3'>Adultos</button>");
	}
function pegadinheiro(){
	let money = localStorage.getItem('dinheiro');
	money = parseInt(money);
	return money;
}
function maisdinheiro(ganho){
	let dinheiroatual = pegadinheiro();
	dinheiroatual+= ganho;
	localStorage.setItem('dinheiro',dinheiroatual);
	
	
}
function emp(){
	
 	return localStorage.getItem('empresa');
}
function usu () {
	return localStorage.getItem('usuario');
}
function somteclado(){
	teclado.addEventListener('ended', function() {
		if(sound==0){
    this.currentTime = 0;
  this.play();
}
}, false);
 if(sound==0)teclado.play();
}
function programacoes(){
	if(sound==0)beep.play();

		$('#opcoes').html("<h1 class='config'>Quais serão usados:</h1>");
				$('#opcoes').append("<label class='container'>HTML<input type='checkbox'  checked required><span class='checkmark'></span><label>");
				let CSS = localStorage.getItem('conhecimento').search('CSS');
				if(CSS==-1){
				$('#opcoes').append("<label class='container desativado' >CSS<input type='checkbox' value='0' id='css' disabled><span class='checkmark'></span><label>");
			}
				else{
					 $('#opcoes').append("<label class='container'>CSS<input type='checkbox' value='1' name='css' id='inputcss'><span class='checkmark'></span><label>");
				
				}
				let JS = localStorage.getItem('conhecimento').search('JS');
				if(JS!=-1){

				$('#opcoes').append("<label class='container'>JavaScript<input type='checkbox' value='1' name='js' id='inputjs'><span class='checkmark'></span><label>");
			}
			else{
				$('#opcoes').append("<label class='container desativado' >JavaScript<input type='checkbox' value='0' name='js' disabled><span class='checkmark'></span><label>");
			}
				let PHP = localStorage.getItem('conhecimento').search('PHP');
				if(PHP==-1){
					$('#opcoes').append("<label class='container desativado' >PHP<input type='checkbox' value='0' id='inputphp' disabled><span class='checkmark'></span><label>");
				}
				else{
					 $('#opcoes').append("<label class='container'>PHP<input type='checkbox' value='1' name='php' id='inputphp'><span class='checkmark'></span><label>");
				}
				$('#opcoes').append('<button type="button" class="btn btn-info" id="linguagem">Próximo</button>');

}
function notadosite(nota,ganho,nome,href){
	let taxa = ganho;
	let empresa =  localStorage.getItem('emprego');
	if(localStorage.getItem('emprego')!=0) ganho = Math.floor(ganho/3);
	if(empresa==1){
			empresa='Teknisa';
		}
		if(empresa==2){
			empresa='Google';
		}
	
	let renda = ganho+sal()-4000+pegafan();
	let ganhofan = Math.floor((renda-pegafan())/3);
	if(ganhofan+pegafan()<0) ganhofan=-(pegafan());
	
	if(sound==0)beep.play();
					
					let nota1 = calculonota(nota);
					let nota2 = calculonota(nota);
					let nota3 = calculonota(nota);
					$('#titulo-modal').html('As primeiras reviews de <a target="_blank" href="'+href+'">'+nome+'</a> sairam!');
					$('#texto-modal').html('<h2><strong>'+nota1+'<strong><h2>');
					if(nota1==0)$('#texto-modal').append('<p>"Site horroso,mal programado e com pessíma escolha de tema"</p>');
					if(nota1==1)$('#texto-modal').append('<p>"Muito ruim,perda de tempo"</p>');
					if(nota1==2)$('#texto-modal').append('<p>"Terrível,muito a melhorar"</p>');
					if(nota1==3)$('#texto-modal').append('<p>"Deixa a desejar,pra falar o mínimo"</p>');
					if(nota1==4)$('#texto-modal').append('<p>"Site muito mediano,nada demais"</p>');
					if(nota1==5)$('#texto-modal').append('<p>"Nem ruim, nem bom"</p>');
					if(nota1==6)$('#texto-modal').append('<p>"Tem potencial"</p>');
					if(nota1==7)$('#texto-modal').append('<p>"Bom site,bem programado"</p>');
					if(nota1==8)$('#texto-modal').append('<p>"Ótimo,bela combinação entre tema e público alvo por parte de '+localStorage.getItem('usuario')+'"</p>');
					if(nota1==9)$('#texto-modal').append('<p>"Quase perfeito,muito bom trabalho site divertido e com conteúdo"</p>');
					if(nota1==10)$('#texto-modal').append('<p>"Perfeito,tudo sobre '+nome+' está impecável"</p>');
					$('#texto-modal').append('<strong>IGN</strong><br><br>');
					$('#texto-modal').append('<h2><strong>'+nota2+'<strong><h2>');
					if(nota2==0)$('#texto-modal').append('<p>"Horrível, horrível, horrível, horroroso... HORRÍVEL. Um espanto. Me faz mal."</p>');
					if(nota2==1)$('#texto-modal').append('<p>"Péssimo site,nada de bom aqui"</p>');
					if(nota2==2)$('#texto-modal').append('<p>"Nem um pouco bom,poucos pontos positivos"</p>');
					if(nota2==3)$('#texto-modal').append('<p>"Bem ruim,falta muito brilho"</p>');
					if(nota2==4)$('#texto-modal').append('<p>"Abaixo da média,não impressiona nem um pouco"</p>');
					if(nota2==5)$('#texto-modal').append('<p>"OK,site mediano"</p>');
					if(nota2==6)$('#texto-modal').append('<p>"Um pouco acima da média,mas é preciso trabalho"</p>');
					if(nota2==7)$('#texto-modal').append('<p>"Bom site,com certeza serve ao seu propósito"</p>');
					if(nota2==8)$('#texto-modal').append('<p>"Muito bom, '+localStorage.getItem('empresa')+' fez um otímo serviço nesse site"</p>');
					if(nota2==9)$('#texto-modal').append('<p>"Magnífico,'+nome+' definitivamente foi um grande acerto</p>'); 
					if(nota2==10)$('#texto-modal').append('<p>"Impecável,'+localStorage.getItem('usuario')+'se estabeleu na indústria com esse site"</p>');

					$('#texto-modal').append('<strong>Metacritic</strong><br><br>');
					$('#texto-modal').append('<h2><strong>'+nota3+'<strong><h2>');
					if(nota3==0)$('#texto-modal').append('<p>"Desastroso,deixa muito a desejar"</p>');
					if(nota3==1)$('#texto-modal').append('<p>"Péssimo,não recomendo esse site"</p>');
					if(nota3==2)$('#texto-modal').append('<p>"Muito ruim,não vale a pena entrar neste site"</p>');
					if(nota3==3)$('#texto-modal').append('<p>"Sem inspiração"</p>');
					if(nota3==4)$('#texto-modal').append('<p>"Falta muito"</p>');
					if(nota3==5)$('#texto-modal').append('<p>"Já vi melhores"</p>');
					if(nota3==6)$('#texto-modal').append('<p>"Bom,mas pode melhorar ainda"</p>');
					if(nota3==7)$('#texto-modal').append('<p>"Belo site, '+localStorage.getItem('empresa')+' fez um bom trabalho"</p>');
					if(nota3==8)$('#texto-modal').append('<p>"Simplesmente me fascina,o site apresenta muito poucos defeitos"</p>');
					if(nota3==9)$('#texto-modal').append('<p>"Perto da perfeição, '+localStorage.getItem('empresa')+' acertou em cheio."</p>'); 
					if(nota3==10)$('#texto-modal').append('<p>"Extraordinário,se seu site estivesse em um jogo de simulação tiraria 10/10"</p>');
					$('#texto-modal').append('<strong>IMDB</strong>');

					$("#myModal").modal();
					if(sound==0)blop.play();

					$('.modal').on('click','#fechar', function(){
						
					$('#titulo-modal').html('<h1>Fim do mês</h1>');
					$('#texto-modal').empty();

					
					if(ganhofan>=0){
					$('#texto-modal').append('<p>Fans ganhos: <em class="azul">+'+ganhofan+'</em></p>');
				}
				else {
					$('#texto-modal').append('<p>Fans perdidos: <em class="azul">'+ganhofan+'</em></p>');
				}
					if(localStorage.getItem('salario')){
						$('#texto-modal').append('<p>Salário: <em class="verde"> +$'+sal()+'</em><br>');
						
						
					}
						
   						$('#texto-modal').append('<p>Lucro arrecado com '+nome+': <em class="verde"> +$'+taxa+'</em><br>');
   						if(localStorage.getItem('salario'))$('#texto-modal').append('<p>Taxa pega pela '+empresa+': <em class="vermelho">-$'+Math.floor(2*taxa/3)+'</em><br>');
   						$('#texto-modal').append('<p>Valor das contas: <em class="vermelho"> -$4000</em>');
   						$('#texto-modal').append('<p>========================================</p>'); 
   						
   						if(ganho+sal()>4000){
   							$('#texto-modal').append('<p>Renda líquida: <em class="verde">+$'+renda+'</em></p>');
   						}
   						else {
   							$('#texto-modal').append('<p>Renda líquida: <em class="vermelho">-$'+-renda+'</em></p>');
   						}
   					
   						$("#myModal").modal();
   						if(sound==0)caixa.play();
   						
					});;
					
					
					localStorage.setItem('vezes',parseInt(localStorage.getItem('vezes'))+1);
					
					maisdinheiro(renda);
					maisfan(ganhofan);
					inicio();
					$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
					$('#fansh2').html('<img src="imgs/Users.png" id="fansimg"><h2 id="fans">'+pegafan()+'</h2>');
}
function nomedosite(){
	if(sound==0)beep.play();
	$('#opcoes').empty();
	$('#opcoes').html('<h1>Nome do Site:</h1>');
	$('#opcoes').append('<input type="text" id="nomedosite">');
	$('#opcoes').append('<button type="button" class="btn btn-info" id="enviar">Próximo</button>');
}
function calculonota(nota){
	let num = Math.floor(Math.random() * 11);
	
	let max = nota+1;
	if(max==10){
		max--;
	}
	
	
	let min = nota-1;
	while(num<min||num>max){
		num = Math.floor(Math.random() * 11);
	}
	return num;
}
function barra(c,nota,ganho,nome,href){
	
	if(c<100){
	if(sound==0)	loading.play();
	
	$('#progresso').html('<div class="progress" ><div class="progress-bar progress-bar-striped" role="progressbar" style="width: '+c+'%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div></div>');
	 $("#modal1").modal({
            backdrop: 'static',
            keyboard: false
        });
	}
	if(c==100){
		 $('#modal1').modal('toggle');
		 loading.pause();
		notadosite(nota,ganho,nome,href);
		
		$('#fans').html(pegafan());
	}
	setTimeout(function() {
   barra(c+1,nota,ganho,nome,href);
}, 50);
	
}
function confere(val){
	if(Number.isInteger(parseInt(val))==true){
		return 1;
	}
	else {
		return 0;
	}
}
function sal(){
	if(localStorage.getItem('salario')){
	return parseInt(localStorage.getItem('salario'));
	}
	else {
		return 0;
	}
}
function pegafan(){
	return parseInt(localStorage.getItem('fans'));
}
function maisfan(ganho){
	let fanatual = pegafan();
	localStorage.setItem('fans',pegafan()+ganho);
}
function resetar(){
		localStorage.setItem('dinheiro',10000);
		localStorage.setItem('emprego',0);
		localStorage.setItem('conhecimento','HTML');
		localStorage.setItem('pixel','<img src="imgs/old.png" id="avatar">');
		localStorage.setItem('vezes',0);
		localStorage.setItem('fans',0);
		localStorage.setItem('cp',0);
		localStorage.setItem('trabalho',0);
		localStorage.removeItem('e');
		localStorage.removeItem('d');
		localStorage.removeItem('salario');
		$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
		$('#fans').html(pegafan());
		$('#sprite').html(localStorage.getItem('pixel'));
		tutorial();
}
function tutorial(){
			$('#titulo-modal').html('Tutorial');
				$('#texto-modal').html('<iframe width="100%" height="300px" src="https://www.youtube.com/embed/gVVziBUZVEw"></iframe>');
				$('#myModal').modal();
}