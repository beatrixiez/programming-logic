Algoritmo "eleitores"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Obama
// Descrição   : Solicitar as informações da eleição e mostrar suas porcentagens
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Seção de Declarações das variáveis 
eleitores,validos,brancos,nulos:inteiro
porcentagemvotosvalidos, porcentagemvotosbrancos, porcentagemvotosnulos:real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
escreva("Digite o número total de eleitores de um município: ") //saida de dados
leia(eleitores) //entrada de dados
escreva("Digite o número total de votos válidos: ") //saida de dados
leia(validos) //entrada de dados
escreva("Digite o número total de votos brancos: ") //saida de dados
leia(brancos) //entrada de dados
escreva("Digite o número total de votos nulos: ") //saida de dados
leia(nulos) //entrada de dados
porcentagemvotosvalidos <- validos/eleitores*100 //processamneto de dados
porcentagemvotosbrancos <- brancos/eleitores*100 //processamneto de dados
porcentagemvotosnulos <- nulos/eleitores*100 //processamneto de dados
escreval("A porcentagem de votos válidos corresponde a: ",porcentagemvotosvalidos, "%") //saida de dados
escreval("A porcentagem de votos brancos corresponde a: ",porcentagemvotosbrancos, "%") //saida de dados
escreval("A porcentagem de votos nulos corresponde a: ",porcentagemvotosnulos, "%") //saida de dados

Fimalgoritmo