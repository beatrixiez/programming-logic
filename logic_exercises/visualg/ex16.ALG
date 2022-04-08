Algoritmo "nota-aluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Ler a nota do aluno e informar se ele foi aprovado ou reprovado
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Seção de Declarações das variáveis 
nota1, nota2, notaFinal:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
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