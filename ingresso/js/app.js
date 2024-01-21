function comprar() {
    let tipo = document.getElementById('tipo-ingresso');
    let Quantidade = parseInt(document.getElementById('qtd').value);

    if(tipo.value == 'pista'){
        comprarPista(Quantidade);
    }else if(tipo.value == 'superior'){
        comprarSuperior(Quantidade);
    }else if(tipo.value == 'inferior'){
        comprarInferior(Quantidade);
    }
}
function comprarPista(Quantidade) {
    let quantidadeDis = parseInt(document.getElementById('qtd-pista').textContent);

    if (Quantidade > quantidadeDis) {
       alert('Qunatidade de ingresso não está indisponivel');
    }else {
        quantidadeDis =quantidadeDis - Quantidade;
        document.getElementById('qtd-pista').textContent = quantidadeDis;
       alert('Compra realizado com sucesso');
    }  
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comprarSuperior(Quantidade) {
    let quantidadeDis = parseInt(document.getElementById('qtd-superior').textContent);

    if (Quantidade > quantidadeDis) {
       alert('Qunatidade de ingresso não está indisponivel');
    }else {
        quantidadeDis =quantidadeDis - Quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeDis;
       alert('Compra realizado com sucesso');
    }  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comprarInferior(Quantidade) {
    let quantidadeDis = parseInt(document.getElementById('qtd-inferior').textContent);

    if (Quantidade > quantidadeDis) {
       alert('Qunatidade de ingresso não está indisponivel');
    }else {
        quantidadeDis =quantidadeDis - Quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeDis;
       alert('Compra realizado com sucesso');
    }  
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////