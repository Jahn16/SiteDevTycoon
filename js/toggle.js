let sound = 0;
$('#transparente').on('click','.fechado',function abre(){
	$('#menu').fadeIn();
	$('#engrenagem').addClass('aberto');
	$('#engrenagem').removeClass('fechado');
	$('#engrenagem').css("background-image"," url('imgs/engine2.png')");
	});
$('#transparente').on('click','.aberto',function fecha(){
	
	$('#menu').fadeOut();
	$('#engrenagem').addClass('fechado');
	$('#engrenagem').removeClass('aberto');
	$('#engrenagem').css("background-image"," url('imgs/engine.png')");

	 });
$(document).mouseup(function (e){

	 

	if (!$("#controles-menu").is(e.target) && $("#controles-menu").has(e.target).length === 0){

		$('#menu').fadeOut();
	$('#engrenagem').addClass('fechado');
	$('#engrenagem').removeClass('aberto');
	$('#engrenagem').css("background-image"," url('imgs/engine.png')");
	
	}
}); 
$('#menu').on('click','#ativar',function(){
	let c=0;
	musica[c].play();
	$('.desligado').removeClass('desligado');
	$('#ativar').addClass('ligado');
	$('#ativar').html('DESATIVAR MÚSICA<img src="imgs/pause.png">')
		$('#menu').on('click','#proxima',function(){
			if(c!=musica.length-1){ 
			musica[c].pause();
			c++;
			musica[c].play();
		}
		else {
			musica[c].pause();
			c=0;
			musica[c].play();
		}
		});
		$('#menu').on('click','#anterior',function(){
		if(c!=0){
		musica[c].pause();
		c--;
		musica[c].play();
		}
		else {
			musica[c].pause();
			c=musica.length-1;
			musica[c].play();
		}
	});
$('#menu').on('click','.ligado',function(){
	$('#ativar').removeClass('ligado');
	$('#ativar').html("ATIVAR MUSICA<img src='imgs/play.png'>");
	$('.mus').addClass('desligado');
	musica[c].pause();
})
});

$('#menu').on('click','#som',function(){
	sound=1;
	$('#som').addClass('somdesligado');
	$('#som').html('ATIVAR SOM<img src="imgs/som.png">')
	teclado.pause();
	
})
$('#menu').on('click','.somdesligado',function(){
	sound=0;
	$('#som').removeClass('somdesligado');
	$('#som').html('DESATIVAR SOM<img src="imgs/semsom.png">')
	
})