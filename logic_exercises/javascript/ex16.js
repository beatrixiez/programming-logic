let valor;

alert('Vamos verificar se um número inserido é igual, maior ou menor que 10. Pressione OK ou ENTER')

valor = parseInt(prompt('Insira um número: '));

if (valor == 10) {
    alert('É igual a 10!')
} else if (valor > 10) {
    alert('É maior que 10!')
} else {
    alert('É menor que 10!')
}