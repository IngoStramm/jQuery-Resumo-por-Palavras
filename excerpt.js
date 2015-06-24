/*
* 
* jQuery Resumo por Palavras v1.0
* Criado [23-06-2014]
* por Ingo Stramm
* ingostramm@gmail.com
* 
* 
* Uso:
* 	
* 	$().resumoPorPalavras($('selector'),50,'...');
* 	
* Parâmetros:
* 	
* 	objs: selector CSS
* 	limita: a quantidade de palavras que serão exibidas
* 	verMais: texto a ser exibido após o resumo (por ex: "veja mais" ou "...")
* 	
*/
(function ( $ ) {
    $.fn.resumoPorPalavras = function( objs, limita, verMais ) {
    	if(!verMais || verMais === undefined)
    		verMais = "...";
    	$.each($(objs),function(){
			var palavras = $(this).html().split(" ");
			if(palavras.length >= limita) {
				var resumo = '';
				for (var i = 0; i < limita; i++) {
					resumo += palavras[i] + ' ';
				};
				var regex = /[ .,;!?|\/]/;
				while(regex.test(resumo[resumo.length-1])) {
					resumo = resumo.slice(0,-1);
				}
				resumo += verMais;
				$(this).html(resumo);
			}
    	});
    	return this;
	};
}( jQuery ));