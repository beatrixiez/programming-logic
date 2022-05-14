let nota1, nota2, mediaFinal

// nota igual ou maior que 6 corresponde à aprovação do aluno

alert('Vamos ler duas notas de um aluno e informar se ele foi aprovado ou reprovado, além de informar sua média. Pressione OK ou ENTER.')

nota1 = parseInt(prompt('Informe a primeira nota do aluno: '));
nota2 = parseInt(prompt('Informe a segunda nota do aluno: '));

mediaFinal = (nota1 + nota2) / 2

if (mediaFinal >= 6) {
    alert(`O auno foi aprovado, a média final foi ${mediaFinal}.`)
} else {
    alert(`O aluno foi reprovado, a média final foi ${mediaFinal}.`)
}