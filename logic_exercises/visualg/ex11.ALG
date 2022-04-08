Algoritmo "salario-vendendor"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Solicitar as informações e calcular valor do salário do vendedor
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Seção de Declarações das variáveis 
salarioFixo, valorCarrosVendidos, valorTotalVendas, salarioFinal, comissaoFixa, comissaoVariavel:real
carrosVendidos:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite a quantidade de carros vendidos: ") //saida de dados
leia(carrosVendidos) //entrada de dados
escreva("Digite o valor total de suas vendas: ") //saida de dados
leia(valorTotalVendas) //entrada de dados
escreva("Digite o seu salário fixo: ") //saida de dados
leia(salarioFixo) //entrada de dados
escreva("Digite o valor que você recebe por cada carro vendido: ") //saida de dados
leia(valorCarrosVendidos) //entrada de dados
comissaoFixa <- carrosVendidos*valorCarrosVendidos
comissaoVariavel <- valorTotalVendas*0.05
salarioFinal <- salarioFixo + comissaoFixa + comissaoVariavel
escreval("O salário final corresponde a: R$",salarioFinal) //saida de dados

Fimalgoritmo