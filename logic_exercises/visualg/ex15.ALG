Algoritmo "maçãs-compradas"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Leia o número de maçãs compradas, calcule e escreva o custo total da compra.
// Autor(a)    : Beatriz
// Data atual  : 24/03/2022
Var
// Seção de Declarações das variáveis
macasCompradas:inteiro
valor:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc...
escreva("Digite o número de maçãs compradas: ")
leia(macasCompradas)
se (macasCompradas<12) entao
valor<-macasCompradas*13/10
escreva("O valor total é: ",valor)
senão
escreva("O valor total é: ",macasCompradas)
fimse
Fimalgoritmo