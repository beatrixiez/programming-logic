let numeroDaConta, saldoDaConta, cartaoDeDebito, cartaoDeCredito, saldoAtual


alert('Vamos verificar se o saldo de uma conta é positivo ou negativo. Pressione OK ou ENTER.')

numeroDaConta = parseInt(prompt('Insira o número da conta bancária:'));
saldoDaConta = parseFloat(prompt('Insira o saldo da conta:'));
cartaoDeDebito = parseFloat(prompt('Insira valor gasto no cartão de débito:'));
cartaoDeCredito = parseFloat(prompt('Insira o limite do cartão de crédito:'));

saldoAtual = saldoDaConta - cartaoDeDebito + cartaoDeCredito

if (saldoAtual >= 0) {
    alert(`O saldo da conta é POSITIVO. Valor: ${saldoAtual} reais.`)
} else {
    alert(`O saldo da conta é NEGATIVO. Valor: ${saldoAtual} reais.`)
}

