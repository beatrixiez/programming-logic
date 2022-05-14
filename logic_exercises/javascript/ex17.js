let numero;

alert('Vamos ler um número e informar se ele é positivo, negativo ou neutro. Pressione ENTER ou OK')

numero = parseInt(prompt('Insira um número: '));

if (numero == 0) {
    alert('O número é neutro!')
} else if (numero < 0) {
    alert('O número é negativo!')
} else {
    alert('O número é positivo!')
}