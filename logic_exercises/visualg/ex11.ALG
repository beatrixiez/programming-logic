Algoritmo "salario-vendendor"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Solicitar as informa��es e calcular valor do sal�rio do vendedor
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Se��o de Declara��es das vari�veis 
salarioFixo, valorCarrosVendidos, valorTotalVendas, salarioFinal, comissaoFixa, comissaoVariavel:real
carrosVendidos:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite a quantidade de carros vendidos: ") //saida de dados
leia(carrosVendidos) //entrada de dados
escreva("Digite o valor total de suas vendas: ") //saida de dados
leia(valorTotalVendas) //entrada de dados
escreva("Digite o seu sal�rio fixo: ") //saida de dados
leia(salarioFixo) //entrada de dados
escreva("Digite o valor que voc� recebe por cada carro vendido: ") //saida de dados
leia(valorCarrosVendidos) //entrada de dados
comissaoFixa <- carrosVendidos*valorCarrosVendidos
comissaoVariavel <- valorTotalVendas*0.05
salarioFinal <- salarioFixo + comissaoFixa + comissaoVariavel
escreval("O sal�rio final corresponde a: R$",salarioFinal) //saida de dados

Fimalgoritmo