let macasCompradas, valor;

// se forem compradas menos de 12 maçãs, o valor de cada em real é de 1,30
// ao comprar pelo menos 12 maçãs, o valor cai para 1 real

alert('Vamos calcular o custo total de um compra de acordo com a quantidade de maçãs compradas. Pressione OK ou ENTER.')

macasCompradas = parseInt(prompt('Digite o número de maçãs compradas: '));

if (macasCompradas < 12) {
    valor = macasCompradas * 13 / 10
    alert(`O valor total é: R$${valor}`)
} else {
    alert(`O valor total é: R$${macasCompradas}`)
}