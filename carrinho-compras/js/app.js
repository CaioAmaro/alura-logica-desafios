let totalGeral = 0;
//teste
function adicionar(){

    let quantidade = document.getElementById('quantidade').value;
    if(quantidade == ''){
        alert('ERRO: Você precisa adicionar uma quantidade para prosseguir na compra.')
    }else{
        let produto = document.getElementById('produto').value;
        let valorProduto = produto.split('R$')[1];
        let preco =  valorProduto * quantidade;
        totalGeral+= preco;


        let listaProdutos = document.getElementById('lista-produtos');
        listaProdutos.innerHTML += `<section class="carrinho__produtos__produto">
                                    <span class="texto-azul">${quantidade}x</span> ${produto} | 
                                    <span class="texto-azul">R$${preco}</span>
                                    </section>`;

        let valorTotal = document.getElementById('valor-total');
        valorTotal.innerHTML = `<span class="texto-azul" id="valor-total">R$${totalGeral}</span>`;
        
        resetCampoQtd = document.getElementById('quantidade');
        resetCampoQtd.value = '';
    }

    
}

function limpar(){
    let quantidade = document.getElementById('quantidade');
    let listaProdutos = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');

    quantidade.value = '';
    listaProdutos.innerHTML = '';
    valorTotal.innerHTML = '<span class="texto-azul" id="valor-total">Carrinho Vázio</span>';
    totalGeral = 0;

}