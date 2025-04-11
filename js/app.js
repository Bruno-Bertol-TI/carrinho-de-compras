let totalCarrinho = 0;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let qtdProduct = document.getElementById('quantidade').value;
    
    let nameProduct = produto.split('-')[0]; // usando SPLIT
    let price = produto.split('R$')[1];
    let precoTotalItens = qtdProduct * price;

    if (qtdProduct > 0) {
        totalCarrinho = totalCarrinho +  precoTotalItens;

        let listaCarrinho = document.getElementById('lista-produtos');
        listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
            <span class="texto-azul"> ${qtdProduct}x </span> ${nameProduct} <span class="texto-azul">R$ ${precoTotalItens}</span>
            </section>`
        
        let exibirTotal = document.getElementById('valor-total');
        exibirTotal.innerHTML = `R$ ${totalCarrinho}`;
    }
}