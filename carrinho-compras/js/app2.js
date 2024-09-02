function adicionar(){
    let elementoHtml = document.getElementById('produto').value;
    alert(elementoHtml);
    console.log(elementoHtml);

    let textoTeste = document.getElementById('teste');
    textoTeste.textContent = 'Modificado depois de ter clicado !';

    let num1 = 3;
    let num2 = 4;
    let resultadoSoma = num1+num2;

    console.log(`A soma entre ${num1} + ${num2} = ${resultadoSoma}`);

    let StringDivida = document.getElementById('produto').value.split(',');

    console.log(StringDivida);

    let numerosEmString = "1,2,3,4,5,6,7,8,9,10";
    let numerosSeparados = numerosEmString.split(',');
    console.log(numerosSeparados);


}