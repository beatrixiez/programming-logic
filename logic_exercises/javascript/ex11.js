let nota1, nota2, nota3, mediaFinal;

alert('Vamos calcular a média final de um aluno após 3 notas serem informadas. Pressione ENTER ou OK')

nota1 = parseFloat(prompt('Digite sua primeira nota: '));
nota2 = parseFloat(prompt('Digite sua segunda nota: '));
nota3 = parseFloat(prompt('Digite sua terceira nota: '));

mediaFinal = ((nota1 + nota2 + nota3) / 3);

alert('A sua média final é: ' + mediaFinal)
