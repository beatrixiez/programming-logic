let valor1, valor2, valor3

alert('Vamos colocar em ordem crescente os 3 valores diferentes inseridos. Pressione OK ou ENTER.')

valor1 = parseFloat(prompt('Insira o primeiro valor:'));
valor2 = parseFloat(prompt('Insira o segundo valor:'));
valor3 = parseFloat(prompt('Insira o terceiro valor:'));

if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
    alert('Por favor, insira valores diferentes.')
} else if (valor1 > valor2 && valor2 > valor3) {
    alert(`Em ordem crescente: ${valo3} - ${valor2} - ${valor1}`)
} else if (valor1 > valor2 && valor2 < valor3) {
    alert(`Em ordem crescente: ${valor2} - ${valor3} - ${valor1}`)
} else if (valor1 < valor2 && valor1 > valor3) {
    alert(`Em ordem crescente: ${valor3} - ${valor1} - ${valor2}`)
} else if (valor1 < valor2 && valor1 < valor3) {
    alert(`Em ordem crescente: ${valor1} - ${valor3} - ${valor2}`)
} else if (valor3 > valor2 && valor2 > valor1) {
    alert(`Em ordem crescente: ${valor1} - ${valor2} - ${valor3}`)
} else {
    alert(`Em ordem crescente: ${valor2} - ${valor1} - ${valor3}`)
}