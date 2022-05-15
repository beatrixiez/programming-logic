let horasTrabalhadasMes, salarioHora, horasExtras, salarioParcial, salarioTotal

// considere que a jornada de trabalho semanal é de 40 horas
// considere que o mês possua 4 semanas exatas
// a hora extra corresponde à hora regular + 50% de acréscimo

alert('Vamos calcular o salário total de um funcionário com horas extras trabalhadas. Pressione OK ou ENTER.')

salarioHora = parseFloat(prompt('Digite o valor do salário hora:'))
horasExtras = parseInt(prompt('Digite a quantidade de horas extras trabalhadas no mês:'))

salarioParcial = (160 * salarioHora)
salarioTotal = (salarioHora * 0.5) * horasExtras + salarioParcial

if (horasExtras == 0) {
    alert(`O salário total é de ${salarioParcial} reais.`)
} else {
    alert(`O salário parcial é de ${salarioParcial} reais, com as horas extras o total é de ${salarioTotal} reais.`)
}