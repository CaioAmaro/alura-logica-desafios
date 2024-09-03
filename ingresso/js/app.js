let pista = parseInt(document.getElementById('qtd-pista').textContent);
let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);

function comprar(){
 
  let tipoIngresso = document.getElementById('tipo-ingresso').value;
  let qtd = document.getElementById('qtd').value;

  if(verificadorQtd(qtd)){
    if(disponibilidadeIngresso(tipoIngresso,qtd)){
      reservarIngresso(tipoIngresso,qtd);
      atualizarQtdInterface();
    }else{
      alert('Não foi possível efetivar sua compra!');
    }
  }else{
    alert('Quantidade está incorreta');
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

function verificadorQtd(qtd){
  return qtd<=0 ? false : true;
}

//EXTRAS
function transformandoStringEmInt(texto){
  let transformacao = parseInt(texto);
  return transformacao;
}

function calculadora(operacao,num1,num2){
  if(operacao == 'add'){
    console.log(`Você está fazendo uma adição | ${num1} + ${num2} = ${num1 + num2}`);
  }else if(operacao == 'sub'){
    console.log(`Você está fazendo uma subtração | ${num1} - ${num2} = ${num1 - num2}`);
  }else if(operacao == 'div'){
    console.log(`Você está fazendo uma divisão | ${num1} / ${num2} = ${num1 / num2}`);
  }else if(operacao == 'mult'){
    console.log(`Você está fazendo uma multiplicação | ${num1} * ${num2} = ${num1 * num2}`);
  }
}

function parOuImpa(num1){

  console.log(num1 % 2 == 0 ? `${num1} é par` : `${num1} é ímpa`);
}

function celsiusParaFahrenheit(temp){
  console.log(`${temp}°C = ${(temp * 1.8)+32}°F`);
}

function fahrenheitParaCelsius(temp){
  console.log(`${temp}°F = ${(temp-32)/1.8}`);
}