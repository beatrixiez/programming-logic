Algoritmo "maior-entre"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   :  Ler dois valores e escrever o maior deles.
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
escreva("O número",numero1," é o maior!")
senao
escreva("O número",numero2," é o maior!")
fimse
Fimalgoritmo