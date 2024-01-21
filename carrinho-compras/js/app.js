    let subTotal;
    limpar();
    
    function adicionar() {
    let Produtos = document.getElementById('produto').value;
    let nomeProdutos = Produtos.split('-')[0];
    let preco = Produtos.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    let precoCarrinho = quantidade * preco;
    let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML= carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProdutos} <span class="texto-azul">R$${preco,precoCarrinho}</span>
        </section>`
        subTotal = subTotal + precoCarrinho;
        let campoTotal = document.getElementById('valor-total');
        campoTotal.textContent = `R$ ${subTotal}`
}
    function limpar() {
        subTotal = 0;
        document.getElementById('valor-total').innerHTML='R$ 0';
        carrinho = document.getElementById('lista-produtos').innerHTML = '';
        
}