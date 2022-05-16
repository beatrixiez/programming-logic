let idadeHomem1, idadeHomem2, idadeMulher1, idadeMulher2, somaIdade, produtoIdade 

alert('Vamos fazer operações matemáticas com a idade de 4 pessoas diferentes. Pressione OK ou ENTER.')

// será realizado a soma da idade do homem mais velho com a idade da mulher mais nova
// será realizada a multiplicação da idade do homem mais novo com a mulher mais velha

idadeHomem1 = parseInt(prompt('Insira a idade do primeiro homem:'))
idadeHomem2 = parseInt(prompt('Insira a idade do segundo homem:'))
idadeMulher1 = parseInt(prompt('Insira a idade da primeira mulher:'))
idadeMulher2 = parseInt(prompt('Insira a idade da segunda mulher:'))

if (idadeHomem1 == idadeHomem2 || idadeMulher1 == idadeMulher2) {
    alert('As idades entre os homens ou as mulheres precisam ser diferentes!')
} else if (idadeHomem1 > idadeHomem2 && idadeMulher1 < idadeMulher2) {
    somaIdade = idadeHomem1 + idadeMulher1
    produtoIdade = idadeHomem2 * idadeMulher2
    alert(`A soma das idades do homem mais velho e da mulher mais nova é de ${somaIdade}.\nO produto das idades do homem mais novo com a mulher mais velha é ${produtoIdade}.`)
} else if (idadeHomem1 < idadeHomem2 && idadeMulher1 < idadeMulher2) {
    somaIdade = idadeHomem2 + idadeMulher1
    produtoIdade = idadeHomem1 * idadeMulher2
    alert(`A soma das idades do homem mais velho e da mulher mais nova é de ${somaIdade}.\nO produto das idades do homem mais novo com a mulher mais velha é ${produtoIdade}.`)
} else if (idadeHomem1 > idadeHomem2 && idadeMulher1 > idadeMulher2) {
    somaIdade = idadeHomem1 + idadeMulher2
    produtoIdade = idadeHomem2 * idadeMulher1
    alert(`A soma das idades do homem mais velho e da mulher mais nova é de ${somaIdade}.\nO produto das idades do homem mais novo com a mulher mais velha é ${produtoIdade}.`)
} else {
    somaIdade = idadeHomem2 + idadeMulher2
    produtoIdade = idadeHomem1 * idadeMulher1
    alert(`A soma das idades do homem mais velho e da mulher mais nova é de ${somaIdade}.\nO produto das idades do homem mais novo com a mulher mais velha é ${produtoIdade}.`)
}