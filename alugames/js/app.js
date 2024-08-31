/**
 * STATUS
 * ALUGAR - > dashboard__item__button
 * DEVOLVER -> dashboard__item__button dashboard__item__button--return
 * 
 * IMAGEM
 * ALUGAR -> dashboard__item__img
 * DEVOLVER -> dashboard__item__img dashboard__item__img--rented
 * 
 * 
 */

function alterarStatus(id){
   let game = document.getElementById(`game-${id}`);
   let imagemGame = game.querySelector('.dashboard__item__img');
   let botaoGame = game.querySelector('.dashboard__item__button');

   if(imagemGame.classList.contains('dashboard__item__img--rented')){
        let confirmar = prompt('Você deseja devolver ? (s/n)');

        if(confirmar == 's'){
            alert('Devolução concluída');
            imagemGame.classList.remove('dashboard__item__img--rented');
            botaoGame.classList.remove('dashboard__item__button--return');
            botaoGame.textContent = 'Alugar';
        }
   }else{
        imagemGame.classList.add('dashboard__item__img--rented');
        botaoGame.classList.add('dashboard__item__button--return');
        botaoGame.textContent = 'Devolver';
   }

    verificarAlugados();
}

function verificarAlugados(){
    let alugados=0;
    for(let i=1; i<=3;i++){
        let game = document.getElementById(`game-${i}`);
        let botaoGame = game.querySelector('.dashboard__item__button');

        if(botaoGame.textContent == 'Devolver'){
            alugados +=1;
        }
    }
    console.log(`Existem ${alugados} jogos alugados no momento`);
    console.log(`Temos ${3-alugados} jogos disponiveis para alocação`);
}


//Exercicios extras Alura

function palidromo(palavra){
    let palavraSeparada = palavra.split("");
    let palavraInvertida = palavraSeparada.reverse();
    palavraInvertida = palavraInvertida.join("");

    if(palavra == palavraInvertida){
        console.log(`A palavra ${palavra} é um palídromo`);
    }else{
        console.log(`A palavra ${palavra} não é um palídromo`);
    }
}

function ordenarNumero(a,b,c){
    let numeros = [a,b,c];

    for(let j = 0;j<3;j++){
        for(let i = 0; i<3;i++){
            console.log(numeros[i]);
            if(numeros[i]>numeros[i+1]){
                console.log('é maior')
                let aux = numeros[i+1];
                numeros[i+1] = numeros[i];
                numeros[i] = aux;
            }
        }
    }

    console.log(numeros);
}