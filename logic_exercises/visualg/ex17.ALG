Algoritmo "ano-nascimento"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poder� ou n�o votar este ano.
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Se��o de Declara��es das vari�veis 
anoAtual, anoDeNascimento, idade:inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite o ano em que estamos: ")
leia(anoAtual)
escreva("Digite o ano em que voc� nasceu: ")
leia(anoDeNascimento)
idade<-anoAtual-anoDeNascimento
se idade>=16 entao
escreva("Voc� j� pode votar!")
senao
escreva("Voc� ainda n�o pode votar!")
fimse
Fimalgoritmo