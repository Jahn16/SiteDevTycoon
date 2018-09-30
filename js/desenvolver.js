//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	$('#avatar').click(function(){
	
	
	$('#sprite').html("<img src='imgs/programador3.png' id='avatar'>");
});
let conhecimento =0;
let potencial = 0;
let metodo=0;
let teclado = new Audio('audio/teclado.mp3');
let beep = new Audio('audio/beep.wav');
$(document).ready(function() {
	if (!localStorage.getItem('dinheiro')) {
		localStorage.setItem('dinheiro',0);
		localStorage.setItem('conhecimento',0);
	}
	$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
	
	});
$('button').click(function(){
	beep.play();
})
	$('#opcoes').on("click", "#desenvolver", function() {
		somteclado();
		limpa();
		tema();
		//Não feito
			$('#op3').click(function(){
	
				potencial=4200;
				publico();
			

			});
			$('#op2').click(function(){
		
			publico();

			$('#pa1').click(function(){
			
			limpa();
			nomedosite();	
			

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				$('#enviar').click(function(){
					
					limpa();
					din();
					let ganho = Math.floor(Math.random() * 1300) + potencial;
					 maisdinheiro(ganho);
					$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
					$("#myModal").modal();
					$('#titulo-modal').html(emp()+' faz sucesso!');
					$('#texto-modal').html(usu()+' com seu novo site atraiu uma massa de pessoas.');
					inicio();
					teclado.pause();	

				});	
		});
	});


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$('#op1').click(function(){
		
		limpa();
		publico();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
				
				$('#pa1').click(function(){
					
				
				

				limpa();
			programacoes();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
				$('#linguagem').click(function(){
						nomedosite();

							
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

				$('#enviar').click(function(){
					teclado.pause();
					let nota=8;
					let nome = $('#nomedosite').val();
					limpa();
					din();
					let ganho = Math.floor(Math.random() * 1300) + potencial;
					 maisdinheiro(ganho);
					$('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
						
						notadosite(nota,ganho,nome);
					
				 	 });
				});	
		});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////			
});


});

function inicio(potencial){
					
					
					$('#opcoes').append('<button type="button" class="btn btn-outline-primary" id="desenvolver">Desenvolver Site</button>');
					$('#opcoes').append('<button type="button" class="btn btn-outline-success" id="aprender">Aprender</button>');
					$('#opcoes').append('<button type="button" class="btn btn-outline-danger">Contratos</button>');
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
}
function tema() {
		$('#opcoes').html("<h1>Tema do Site:</h1>");
	
		$('#opcoes').append("<button class='btn btn-outline-primary' id='op1'>Raças Raras de Ovelhas</button>");
		$('#opcoes').append("<button class='btn btn-outline-success' id='op2'>Plantas Carnívoras</button>");
		$('#opcoes').append("<button class='btn btn-outline-danger' id='op3'>Coding Dojo</button>");
}
	function publico(){
		$('#opcoes').html("<h1>Público Alvo:</h1>");
		$('#opcoes').append("<button class='btn btn-outline-primary' id='pa1'>Crianças</button>");
		$('#opcoes').append("<button class='btn btn-outline-success' id='ap2'>Adolescentes</button>");
		$('#opcoes').append("<button class='btn btn-outline-danger' id='ap3'>Adultos</button>");
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
	
	return ganho;
}
function emp(){
	
 	return localStorage.getItem('empresa');
}
function usu () {
	return localStorage.getItem('usuario');
}
function somteclado(){
	teclado.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
teclado.play();
}
function programacoes(){
		$('#opcoes').html("<h1>Quais serão usados:</h1>");
				$('#opcoes').append("<label class='container'>HTML<input type='checkbox' value='2000' checked><span class='checkmark'></span><label>");
				if(metodo==0){
				$('#opcoes').append("<label class='container' >CSS<input type='checkbox' value='4000' disabled><span class='checkmark'></span><label>");
			}
				else{
					 $('#opcoes').append("<label class='container>CSS<input type='checkbox' value='4000' ><span class='checkmark'></span><label>");
				
				}
				if(metodo>=1){

				$('#opcoes').append("<label class='container'>JavaScript<input type='checkbox' value='6000' ><span class='checkmark'></span><label>");
			}
			else{
				$('#opcoes').append("<label class='container'>JavaScript<input type='checkbox' value='6000' disabled><span class='checkmark'></span><label>");
			}
				$('#opcoes').append('<button type="button" class="btn btn-info" id="linguagem">Próximo</button>');
}
function notadosite(nota,ganho,nome){
					let nota1 = calculonota(nota);
					let nota2 = calculonota(nota);
					let nota3 = calculonota(nota);
					$('#titulo-modal').html('As primeiras reviews de '+nome+' sairam!');
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
					if(nota3==4)$('#texto-modal').append('<p>""</p>');
					if(nota3==5)$('#texto-modal').append('<p>"Já vi melhores"</p>');
					if(nota3==6)$('#texto-modal').append('<p>"Bom,mas pode melhorar ainda"</p>');
					if(nota3==7)$('#texto-modal').append('<p>"Belo site, '+localStorage.getItem('empresa')+' fez um bom trabalho"</p>');
					if(nota3==8)$('#texto-modal').append('<p>"Simplesmente me fascina,o site apresenta muito poucos defeitos"</p>');
					if(nota3==9)$('#texto-modal').append('<p>"Perto da perfeição, '+localStorage.getItem('empresa')+' entrega um serviço muito bom."</p>'); 
					if(nota3==10)$('#texto-modal').append('<p>"Extraordinário,se seu site estivesse em um jogo de simulação tiraria 10/10"</p>');
					$('#texto-modal').append('<strong>IMDB</strong>')

					$("#myModal").modal();
					inicio();
}
function nomedosite(){
	$('#opcoes').empty();
	$('#opcoes').html('<h1>Nome do Site:</h1>');
	$('#opcoes').append('<input type="text" id="nomedosite">');
	$('#opcoes').append('<button type="button" class="btn btn-info" id="enviar">Próximo</button>');
}
function calculonota(nota){
	let num = Math.floor(Math.random() * 11);
	let max = nota+1;
	let min = nota-1;
	while(num<min||num>max){
		num = Math.floor(Math.random() * 11);
	}
	return num;
}
