let nome = [];
let amigosSorteados = [];

function adicionar(){
    if(validacaoAdicionar(document.getElementById('nome-amigo').value)){
        nome.push(document.getElementById('nome-amigo').value);
        let lista = document.getElementById('lista-amigos');
        lista.textContent = nome;
        document.getElementById('nome-amigo').value = '';
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