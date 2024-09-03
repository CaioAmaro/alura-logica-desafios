let nome = [];
let amigosSorteados = [];

function adicionar(){
    if(validacaoAdicionar(document.getElementById('nome-amigo').value)){
        nome.push(document.getElementById('nome-amigo').value);
        let lista = document.getElementById('lista-amigos');
        document.getElementById('nome-amigo').value = '';
        mostrarLista();
    }
}

function sortear(){
    if(validacaoSortear()){
        let sorteado;
        let listaSorteio = document.getElementById('lista-sorteio');
        for(let i=0; i<nome.length; i++){
            do{
                sorteado = obterNumeroAleatorio(nome.length);
            }while(amigosSorteados.includes(sorteado) || (nome[i] == nome[sorteado]))
            amigosSorteados.push(sorteado);
            listaSorteio.innerHTML += `${nome[i]} -> ${nome[sorteado]} <br/>`;
        }
    }
}

function reiniciar(){
    nome = [];
    amigosSorteados = [];
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
    alert('Sorteio reiniciado!');
}

function obterNumeroAleatorio(qtdAmigos){
    return Math.floor((Math.random() * qtdAmigos));
}

function validacaoAdicionar(getnome){
    if(getnome == ''){
        alert('Erro: Campo está vázio');
        return false;
    }else if(nome.includes(getnome)){
        alert('Erro: O nome digitado já existe')
        return false;
    }

    return true;
}

function validacaoSortear(){
    if(nome.length<4){
        alert('A quantidade mínima para fazer sorteio é 4.');
        return false;
    }else{
        return true;
    }
}

function excluir(id){
    nome.splice(id,1);
    mostrarLista();
}

function mostrarLista(){
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';
    for(let i=0; i<nome.length;i++){
        lista.innerHTML += `<p onclick='excluir(${i})' >${nome[i]}</p>`;
    }
}

//DESAFIOS
function listas(){
    let minhaLista = [1,2,3];
    let minhaLista2 = [4,5,6];
    let novaLista = minhaLista.concat(minhaLista2);
    console.log(novaLista);
    novaLista.pop();
    console.log(novaLista);
    embaralha(novaLista);
    console.log(novaLista);
}

//

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);
        
        // guarda de um índice aleatório da lista
        const elemento = lista[indice - 1];
        
        lista[indice - 1] = lista[indiceAleatorio];
        
        lista[indiceAleatorio] = elemento;
    }
}

function removerDuplicatas(){
    let arrayDuplicatas = [4,6,4,2,2,8,9,5,5,5,3,78];
    let elementosNaoDuplicados = [];

    console.log(`Lista: ${arrayDuplicatas}`);
    for(let i=0; i< arrayDuplicatas.length;i++){
        if(!elementosNaoDuplicados.includes(arrayDuplicatas[i])){
            elementosNaoDuplicados.push(arrayDuplicatas[i]);
        }
    }

    console.log(elementosNaoDuplicados);
   
}

//EXTRAS 2

function sinalNumero(num){
    if(num == 0){
        console.log(`[${num}] é Zero`);
    }else if(num < 0){
        console.log(`[${num}] é Negativo`);
    }else{
        console.log(`[${num}] é Positivo`);
    }
}

function eMaiorDeIdade(idade){
    if(idade >= 18){
        console.log(`Você tem ${idade} anos já é maior de idade`);
    }else if(idade >= 0){
        console.log(`Você tem ${idade} anos é menor de idade`);
    }else{
        console.log('Erro! - Idade incorreta');
    }
}

function eVazia(strings){
    if(strings == ''){
        console.log(`String digitada está vazia`);
    }else{
        console.log(`String digita contém letras`);
    }
}

function eBissexto(ano){
    let anoBissexto = ano / 100;
    let anoBissextoString = anoBissexto.toString();
    resultado = anoBissextoString.split('.');
    if(resultado[1] % 4 == 0){
        console.log(`O ano ${ano} é bissexto`);
    }else{
        console.log(`O ano ${ano} não é bissexto`);
    }
}

function media(num1,num2){
    tipoNum1 = typeof(num1);
    tipoNum2 = typeof(num2);
    if(tipoNum1 != 'number' || tipoNum2 != 'number'){
        console.log('Houve um erro!');
        return;
    }

    let resultado = (num1+num2)/2;
    console.log(`A média entre ${num1} e ${num2} é ${resultado}`);


}

function tamanhoArray(array){
    console.log(`O tamanho da array é ${array.length}`);
}

function includesArray(array,valorProcurado){
    if(array.includes(valorProcurado)){
        console.log('Valor encontrado');
    }else{
        console.log('Valor não encontrado!');
    }
}

function manipulacaoArray(array){
    let arrayPares = [];
    let arrayImpares = [];
    let resultado=0;
    let resultadoFrase='';
    
    for(let i=0; i<array.length;i++){
        if((array[i]%2)==0){
            arrayPares.push(array[i]);
        }else{
            arrayImpares.push(array[i]);
        }
    }


    for(let i=0;i<arrayPares.length;i++){
        resultado += arrayPares[i];
        if(i==arrayPares.length-1){
            resultadoFrase += `${arrayPares[i]}`;
        }else{
            resultadoFrase += `${arrayPares[i]} + `;
        }
    }
    console.log(`A soma de todos os elementos pares (${resultadoFrase}) é igual ${resultado}`);
    resultado = 0;
    resultadoFrase = '';

    for(let i=0;i<arrayImpares.length;i++){
        resultado += arrayImpares[i];
        if(i==arrayImpares.length-1){
            resultadoFrase += `${arrayImpares[i]}`;
        }else{
            resultadoFrase += `${arrayImpares[i]} * `;
        }
    }
    console.log(`A Multiplicação de todos os elementos pares (${resultadoFrase}) é igual ${resultado}`);

    console.log(`ArrayPares: ${arrayPares}`);
    console.log(`ArrayImpares: ${arrayImpares}`);
}





















