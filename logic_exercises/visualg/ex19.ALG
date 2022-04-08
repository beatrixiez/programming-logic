Algoritmo "ordem-crescente"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   :  Ler dois valores e escrevê-los em ordem crescente.
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Seção de Declarações das variáveis 
numero1, numero2:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Insira um número: ")
leia(numero1)
escreva("Agora, insira um número diferente: ")
leia(numero2)
se numero1>numero2 então
escreva("Em ordem crescente: ",numero2,numero1)
senao
escreva("Em ordem crescente: ",numero1,numero2)
fimse
Fimalgoritmo