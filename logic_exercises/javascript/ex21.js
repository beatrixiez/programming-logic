let numero1, numero2

alert('Vamos ler dois valores e informar o maior deles. Pressione OK ou ENTER.')

numero1 = parseFloat(prompt('Insira um número:'));
numero2 = parseFloat(prompt('Agora, insira um número diferente:'));

if (numero1 == numero2) {
    alert('Os números são iguais, insira números diferentes!')
} else if (numero1 > numero2) {
    alert(`O número ${numero1} é maior!`)
} else {
    alert(`O número ${numero2} é maior!`)
}