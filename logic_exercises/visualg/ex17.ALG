Algoritmo "ano-nascimento"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano.
// Autor(a)    : Beatriz
// Data atual  : 25/03/2022
Var
// Seção de Declarações das variáveis 
anoAtual, anoDeNascimento, idade:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o ano em que estamos: ")
leia(anoAtual)
escreva("Digite o ano em que você nasceu: ")
leia(anoDeNascimento)
idade<-anoAtual-anoDeNascimento
se idade>=16 entao
escreva("Você já pode votar!")
senao
escreva("Você ainda não pode votar!")
fimse
Fimalgoritmo