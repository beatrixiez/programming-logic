let eleitores, votosBrancos, votosNulos, votosValidos, percentualBrancos, percentualNulos, percentualValidos;

alert('Vamos calcular o percentual de votos brancos, nulos e válidos em uma eleição. Pressione ENTER ou OK')
eleitores = parseInt(prompt("Digite o número de eleitores: "));
votosBrancos = parseInt(prompt('Digite o número de votos brancos: '));
votosNulos = parseInt(prompt('Digite o número de votos nulos: '));
votosValidos = parseInt(prompt('Digite o número de votos válidos: '));
percentualBrancos = (votosBrancos/eleitores*100)
percentualNulos = (votosNulos/eleitores*100)
percentualValidos = (votosValidos/eleitores*100)
alert(
    'O percentual de votos brancos é de: ' + percentualBrancos +
    '%\nO percentual de votos nulos é de: ' + percentualNulos +
    '%\nO percentual de votos válidos é de: ' + percentualValidos + '%'
)