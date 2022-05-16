let valor1, valor2, valor3, soma

alert('Vamos ver a soma dos 2 maiores valores dentre os 3 diferentes inseridos. Pressione OK ou ENTER.')

valor1 = parseFloat(prompt('Insira o primeiro valor:'));
valor2 = parseFloat(prompt('Insira o segundo valor:'));
valor3 = parseFloat(prompt('Insira o terceiro valor:'));

if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
    alert('Por favor, insira valores diferentes.')
} else if (valor1 > valor2 && valor2 > valor3) {
    soma = valor1 + valor2
    alert(`A soma de ${valor1} + ${valor2} é igual a ${soma}`)
} else if (valor1 > valor2 && valor2 < valor3) {
    soma = valor1 + valor3
    alert(`A soma de ${valor1} + ${valor3} é igual a ${soma}`)
} else if (valor1 < valor2 && valor1 > valor3) {
    soma = valor2 + valor1
    alert(`A soma de ${valor2} + ${valor1} é igual a ${soma}`)
} else if (valor1 < valor2 && valor1 < valor3) {
    soma = valor2 + valor3
    alert(`A soma de ${valor2} + ${valor3} é igual a ${soma}`)
} else if (valor3 > valor2 && valor2 > valor1) {
    soma = valor3 + valor2
    alert(`A soma de ${valor3} + ${valor2} é igual a ${soma}`)
} else {
    soma = valor3 + valor1
    alert(`A soma de ${valor3} + ${valor1} é igual a ${soma}`)
}