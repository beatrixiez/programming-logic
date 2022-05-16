let valor1, valor2

alert('Vamos ler 2 valores e informar se são iguais ou qual deles é o maior. Pressione OK ou ENTER.')

valor1 = parseFloat(prompt('Insira o primeiro valor:'))
valor2 = parseFloat(prompt('Insira o segundo valor:'))

if (valor1 === valor2) {
    alert('Números iguais.')
} else if (valor1 > valor2) {
    alert('O primeiro é maior!')
} else {
    alert('O segundo é maior!')
}