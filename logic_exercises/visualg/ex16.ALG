Algoritmo "nota-aluno"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Ler a nota do aluno e informar se ele foi aprovado ou reprovado
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Se��o de Declara��es das vari�veis 
nota1, nota2, notaFinal:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite a primeira nota do aluno: ")
leia(nota1)
escreva("Digite a segunda nota do aluno: ")
leia(nota2)
notafinal<-(nota1+nota2)/2
se notaFinal>=6 entao
escreva("O aluno foi aprovado, sua nota final foi: ",notaFinal)
senao
escreva("O aluno foi reprovado, sua nota final foi: ",notaFinal)
fimse
Fimalgoritmo