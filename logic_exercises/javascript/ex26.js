let salarioFixo, vendasEfetuadas, valorTotalDasVendas, salarioTotal

// 3% de comissão para o total de vendas até 1500 reais
// mais 5% de comissão sobre o que ultrapassar esse valor

alert('Vamos calcular o salário de um vendedor com comissões variáveis. Pressione OK ou ENTER.')

salarioFixo = parseFloat(prompt('Digite o valor fixo do salário (utilize apenas números e pontos):'));
vendasEfetuadas = parseFloat(prompt('Digite o valor das vendas efetuadas (utilize apenas números e pontos):'));

valorTotalDasVendas = salarioFixo + vendasEfetuadas

if (valorTotalDasVendas <= 1500) {
    salarioTotal = valorTotalDasVendas * 1.03
    alert(`O salário total corresponde a ${salarioTotal} reais.`)
} else {
    salarioTotal = valorTotalDasVendas * 1.05
    alert(`O salário total corresponde a ${salarioTotal} reais.`)
}
