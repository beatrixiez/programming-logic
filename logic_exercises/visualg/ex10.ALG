Algoritmo "salario-atual"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Solicitar o sal�rio atual, percentual de reajuste e calcular valor doo novo sal�rio
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Se��o de Declara��es das vari�veis 
salarioAtual, reajuste, salarioFinal, aumentoSalarial:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite o valor do seu sal�rio atual: ") //saida de dados
leia(salarioAtual) //entrada de dados
escreva("Digite o percentual de reajuste: ") //saida de dados
leia(reajuste) //entrada de dados
aumentoSalarial <- reajuste/100*salarioAtual
salarioFinal <- aumentoSalarial + salarioAtual
escreval("O sal�rio final corresponde a: R$",salarioFinal) //saida de dados

Fimalgoritmo