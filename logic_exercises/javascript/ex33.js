let lado1, lado2, lado3

alert('Vamos verificar se as medidas informadas formam um triângulo. Pressione OK ou ENTER.')
 
// para formar um triângulo, o valor de cada lado deve ser menor que a soma dos outros 2 lados

lado1 = parseFloat(prompt('Insira a primeira medida:'))
lado2 = parseFloat(prompt('Insira a segunda medida:'))
lado3 = parseFloat(prompt('Insira a terceira medida:'))

if (lado1 < (lado2 + lado3) && lado2 < (lado1 + lado3) && lado3 < (lado1 + lado2)) {
    alert('Essas medidas formam um triângulo!')
} else {
    alert('Essas medidas NÃO formam um triângulo!')
}