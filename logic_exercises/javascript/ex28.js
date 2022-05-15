let quantidadeAtualEstoque, quantidadeMinimaEstoque, quantidadeMaximaEstoque, quantidadeMediaEstoque

alert('Vamos calcular a quantidade de um produto em estoque para verificar se é necessário comprar mais do mesmo. Pressione OK ou ENTER.')

quantidadeAtualEstoque = parseInt(prompt('Insira a quantidade atual de produtos no estoque:'));
quantidadeMinimaEstoque = parseInt(prompt('Insira a quantidade mínima de produtos em estoque:'));
quantidadeMaximaEstoque = parseInt(prompt('Insira a quantidade máxima de produtos em estoque:'));

quantidadeMediaEstoque = (quantidadeMinimaEstoque + quantidadeMaximaEstoque) / 2

if (quantidadeAtualEstoque >= quantidadeMediaEstoque) {
    alert('Não efetuar a compra de mais produtos.')
} else {
    alert('Efetue a compra de mais produtos.')
}
