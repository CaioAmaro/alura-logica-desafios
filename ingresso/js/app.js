let pista = parseInt(document.getElementById('qtd-pista').textContent);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar(){
 
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  let qtd = document.getElementById('qtd').value;

  if(disponibilidadeIngresso(tipoIngresso,qtd)){
    reservarIngresso(tipoIngresso,qtd);
    atualizarQtdInterface();
  }else{
    alert('Não foi possível efetivar sua compra!');
  }

}

function disponibilidadeIngresso(tipoIngresso, qtd){
    let resultado;

    if(tipoIngresso == 'pista'){
        resultado = pista >= qtd ? true : false;
      }else if(tipoIngresso == 'superior'){
        resultado = cadeiraSuperior >= qtd ? true : false;
      }else if(tipoIngresso == 'inferior'){
        resultado = cadeiraInferior >= qtd ? true : false;
      }

      return resultado;
}

function reservarIngresso(tipoIngresso,qtd){
    if(tipoIngresso == 'pista'){
        pista -= qtd;
    }else if(tipoIngresso == 'superior'){
        cadeiraSuperior -= qtd;
    }else if(tipoIngresso == 'inferior'){
        cadeiraInferior -= qtd;
    }
}

function atualizarQtdInterface(){
    let mostrarQtdPista = document.getElementById('qtd-pista');
    let mostrarQtdSuperior = document.getElementById('qtd-superior');
    let mostrarQtdInferior = document.getElementById('qtd-inferior');
    mostrarQtdPista.textContent = pista;
    mostrarQtdSuperior.textContent = cadeiraSuperior;
    mostrarQtdInferior.textContent = cadeiraInferior;
}