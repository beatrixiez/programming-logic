let valor1, valor2, valor3

alert('Vamos ver qual é o maior valor dentre os 3 diferentes inseridos. Pressione OK ou ENTER.')

valor1 = parseFloat(prompt('Insira o primeiro valor:'));
valor2 = parseFloat(prompt('Insira o segundo valor:'));
valor3 = parseFloat(prompt('Insira o terceiro valor:'));

if (valor1 == valor2 || valor1 == valor3 || valor2 == valor3) {
    alert('Por favor, insira valores diferentes.')
} else if (valor1 > valor2 && valor3) {
    alert(`O valor ${valor1} é o maior.`)
} else if (valor2 > valor1 && valor2 > valor3) {
    alert(`O valor ${valor2} é o maior.`) 
} else {
    alert(`O valor ${valor3} é o maior.`)
}