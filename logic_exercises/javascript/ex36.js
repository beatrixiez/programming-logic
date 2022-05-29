let usuario = 1234,
    senha = 9999,
    entradaUsuario,
    entradaSenha

alert('Vamos ler dados os dados de usuário inseridos e verificar se são corretos. Pressione OK ou ENTER.')

// o código de usuário válido é 1234
// a senha válida é 9999

function login() {

    entradaUsuario = parseInt(prompt('Insira o código do usuário:'));

    if (entradaUsuario !== usuario) {
        alert('Usuário Inválido!');
        login()
    } else {
        entradaSenha = parseInt(prompt('Insira a senha:'));

        if (entradaSenha !== senha) {
            alert('Senha Incorreta!');
            login()
        } else {
            alert('Acesso Permitido!')
        }
    }
}

login()