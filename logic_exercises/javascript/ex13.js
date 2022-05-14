let  valor, resultado, numero = 1, limite = 10;

// a variável valor é o multiplicando, ou seja, o número que o usuário irá escolher
// a variável resultado representa o produto de cada multiplicação
// a variável número é o multiplicador, aquele que irá multiplicar o número escolhido
// a variável limite determina que o multiplicador, ou seja, a variável número, deve parar no 10

alert('Vamos calcular a tabuada do número escolhido. Pressione ENTER ou OK')

valor = parseInt(prompt('Digite um número: '));

    while (numero <= limite) {
        resultado = valor * numero;
        alert(valor + ' x ' + numero + ' = ' + (valor * numero));
        numero++;
    }