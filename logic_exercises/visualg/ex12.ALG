Algoritmo "media-aluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama 
// Descrição   : Ler 3 notas de um aluno e calcular a média final. Considere que a média é ponderada, e o peso das notas são 2, 3 e 5.
// Autor(a)    : Beatriz
// Data atual  : 06/04/2022
Var
// Seção de Declarações das variáveis 
nota1,nota2,nota3,mediaFinal:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite a primeira nota: ")
leia(nota1)
escreval("Digite a segunda nota: ")
leia(nota2)
escreval("Digite a terceira nota: ")
leia(nota3)
mediaFinal<-((nota1*2)+(nota2*3)+(nota3*5))/10
escreval("A média final é: ",mediaFinal)
Fimalgoritmo