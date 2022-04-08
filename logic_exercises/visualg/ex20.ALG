Algoritmo "media-aluno"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama 
// Descrição   : Ler 2 notas de um aluno e calcular a média final. Informar se ele foi aprovado ou reprovado.
// Autor(a)    : Beatriz
// Data atual  : 06/04/2022
Var
// Seção de Declarações das variáveis 
nota1,nota2,mediaFinal:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreval("Digite a sua primeira nota: ")
leia(nota1)
escreval("Digite a sua segunda nota: ")
leia(nota2)
mediaFinal<-(nota1+nota2)/2
se (mediaFinal=>6) entao
escreval("Sua média final é: ",mediaFinal)
escreval("Parabéns! Você foi aprovado")
senao
escreval("Sua média final é: "mediaFinal)
escreval("Infelizmente você não foi aprovado!")
Fimalgoritmo