Algoritmo "ma��s-compradas"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Leia o n�mero de ma��s compradas, calcule e escreva o custo total da compra.
// Autor(a)    : Beatriz
// Data atual  : 24/03/2022
Var
// Se��o de Declara��es das vari�veis
macasCompradas:inteiro
valor:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
escreva("Digite o n�mero de ma��s compradas: ")
leia(macasCompradas)
se (macasCompradas<12) entao
valor<-macasCompradas*13/10
escreva("O valor total �: ",valor)
sen�o
escreva("O valor total �: ",macasCompradas)
fimse
Fimalgoritmo