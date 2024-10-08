function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
	let qtdNumerosPossiveis = Math.abs(ate - de);
    let sorteados = [];
    let numero;


	if (de > ate) {
		alert('Operação não pode ser realizada, pois os parametros estão errados.');
	} else if (quantidade>qtdNumerosPossiveis) {
		alert('Quantidade de números sorteados possiveis não suficiente');
		console.log(`${quantidade} + ${qtdNumerosPossiveis}`);
	} else {
		for (let i = 0; i < quantidade; i++) {
			do {
				numero = obterNumeroAleatorio(de, ate);
			} while (sorteados.includes(numero));
			sorteados.push(numero);
		}

		let resultado = document.getElementById('resultado');
		resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados} </label>`;

		alterarStatusBotao();
	}
}

function obterNumeroAleatorio(min,max){
    return Math.floor(Math.random() * (max-min+1)) + 1;
}


function alterarStatusBotao(){
	let botao = document.getElementById('btn-reiniciar');
	
	if(botao.classList.contains('container__botao-desabilitado')){
		
		botao.classList.remove('container__botao-desabilitado');
		botao.classList.add('container__botao');
		
	}else{
		
		botao.classList.remove('container__botao');
		botao.classList.add('container__botao-desabilitado');
		
	}
}

function reiniciar(){
	document.getElementById('quantidade').value = '';
	document.getElementById('de').value = '';
	document.getElementById('ate').value = '';
	document.getElementById('resultado').inner = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
	alterarStatusBotao();
}

