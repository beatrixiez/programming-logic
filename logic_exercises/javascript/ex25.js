let altura, sexo, pesoIdeal

alert('Vamos calcular o peso ideal de uma pessoa. Pressione OK ou ENTER.')

altura = parseFloat(prompt('Insira sua altura utilizando números e ponto, exemplo: 1.68'))
sexo = prompt('Insira M para sexo masculino ou F para sexo feminino:')

if (sexo == 'M') {
    pesoIdeal = (72.7 * altura) - 58
    alert(`O seu peso ideal ideal é de ${pesoIdeal} quilos.`)
} else {
    pesoIdeal = (62.1 * altura)- 44.7
    alert(`O seu peso ideal ideal é de ${pesoIdeal} quilos.`)
}