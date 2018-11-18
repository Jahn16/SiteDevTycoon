let musica = [new Audio('audio/shiawase.mp3'),new Audio('audio/infinitepower.mp3'),new Audio('audio/hours.mp3'),new Audio('audio/allme.mp3'),new Audio('audio/fly.mp3'),new Audio('audio/crossfire.mp3')];


document.onkeypress = function(evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode);
   
      if(charStr == 'x'&&localStorage.getItem('admin')==1){
        maisdinheiro(+10000);
        $('#dinheiro').html('$'+localStorage.getItem('dinheiro'));
    }
    if(charStr == 'r'&&localStorage.getItem('admin')==1){
        resetar();
    }
     if(charStr == 'k'){
        admin();
    }

     if(charStr == 'f' &&localStorage.getItem('admin')==1){
       localStorage.setItem('fans',1000);
       $('#fans').html(localStorage.getItem('fans'));
    }
};

function som(c){
	musica[c].play();
	document.onkeypress = function(evt) {
    evt = evt || window.event;
    let charCode = evt.keyCode || evt.which;
    let charStr = String.fromCharCode(charCode);
    if(charStr == 'm'){
    	musica[c].pause();
    }
     if(charStr == 'p'){
    	som(c);
    }
     if(charStr == 'd'&c+1<musica.length){
     	musica[c].pause();
    	som(c+1);
    }
     if(charStr == 'a'&c!=0){
     	musica[c].pause();
    	som(c-1);
    }
    if(charStr == 'd'&c+1==musica.length){
     	musica[c].pause();
    	som(0);
    }
    if(charStr=='a'&c==0){
    	musica[c].pause();
    	som(musica.length-1);
    }
}
	musica[c].addEventListener('ended',function(){
		if(c+1<musica.length){
		som(c+1);
	}
		else {
			som(0);
		}
	});
	
}