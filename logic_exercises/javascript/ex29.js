let valor

alert('Vamos verificar se um valor é positivo, negativo ou zero. Pressione OK ou ENTER.')

valor = parseFloat(prompt('Insira um valor:'))

if (valor > 0) {
    alert(`O número ${valor} é positivo.`)
} else if (valor == 0) {
    alert(`O número ${valor} não é positivo ou negativo.`)
} else {
    alert(`O número ${valor} é negativo.`)  
}