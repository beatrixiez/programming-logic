Algoritmo "media-aluno"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama 
// Descri��o   : Ler 3 notas de um aluno e calcular a m�dia final. Considere que a m�dia � ponderada, e o peso das notas s�o 2, 3 e 5.
// Autor(a)    : Beatriz
// Data atual  : 06/04/2022
Var
// Se��o de Declara��es das vari�veis 
nota1,nota2,nota3,mediaFinal:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreval("Digite a primeira nota: ")
leia(nota1)
escreval("Digite a segunda nota: ")
leia(nota2)
escreval("Digite a terceira nota: ")
leia(nota3)
mediaFinal<-((nota1*2)+(nota2*3)+(nota3*5))/10
escreval("A m�dia final �: ",mediaFinal)
Fimalgoritmo