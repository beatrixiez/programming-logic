Algoritmo "media-aluno"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama 
// Descri��o   : Ler 2 notas de um aluno e calcular a m�dia final. Informar se ele foi aprovado ou reprovado.
// Autor(a)    : Beatriz
// Data atual  : 06/04/2022
Var
// Se��o de Declara��es das vari�veis 
nota1,nota2,mediaFinal:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Digite a sua primeira nota: ")
leia(nota1)
escreval("Digite a sua segunda nota: ")
leia(nota2)
mediaFinal<-(nota1+nota2)/2
se (mediaFinal=>6) entao
escreval("Sua m�dia final �: ",mediaFinal)
escreval("Parab�ns! Voc� foi aprovado")
senao
escreval("Sua m�dia final �: "mediaFinal)
escreval("Infelizmente voc� n�o foi aprovado!")
Fimalgoritmo