Algoritmo "maior-menor-10"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Definir se  um número é igual, maior ou menor que 10
// Autor(a)    : Beatriz
// Data atual  : 24/03/2022
Var
   // Seção de Declarações das variáveis
   valor:real

Inicio
   // Seção de Comandos, procedimento, funções, operadores, etc...
   escreva("Insira um valor: ")
   leia(valor)
   se (valor=10) entao
      escreva("É igual a 10")
   senao
      se  (valor>10) entao
         escreva("É maior que 10!")
      senao
         escreva("É menor que 10!")
      fimse
   fimse
Fimalgoritmo