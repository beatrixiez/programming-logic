Algoritmo "salario-atual"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Solicitar o salário atual, percentual de reajuste e calcular valor doo novo salário
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Seção de Declarações das variáveis 
salarioAtual, reajuste, salarioFinal, aumentoSalarial:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o valor do seu salário atual: ") //saida de dados
leia(salarioAtual) //entrada de dados
escreva("Digite o percentual de reajuste: ") //saida de dados
leia(reajuste) //entrada de dados
aumentoSalarial <- reajuste/100*salarioAtual
salarioFinal <- aumentoSalarial + salarioAtual
escreval("O salário final corresponde a: R$",salarioFinal) //saida de dados

Fimalgoritmo