Algoritmo "ordem-crescente"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   :  Ler dois valores e escrev�-los em ordem crescente.
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Se��o de Declara��es das vari�veis 
numero1, numero2:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Insira um n�mero: ")
leia(numero1)
escreva("Agora, insira um n�mero diferente: ")
leia(numero2)
se numero1>numero2 ent�o
escreva("Em ordem crescente: ",numero2,numero1)
senao
escreva("Em ordem crescente: ",numero1,numero2)
fimse
Fimalgoritmo