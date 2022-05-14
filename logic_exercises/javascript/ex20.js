let anoAtual, anoDeNascimento, idade

alert('Vamos ler o ano de nascimento de um pessoa e informar se ela já pode votar. Pressione OK ou ENTER.')
anoAtual = parseInt(prompt('Digite o ano atual: '));
anoDeNascimento = parseInt(prompt('Digite o ano que você nasceu: '));

idade = (anoAtual - anoDeNascimento);

if (idade >= 16) {
    alert('Você já pode votar!')
} else {
    alert('Você ainda não pode votar!')
}