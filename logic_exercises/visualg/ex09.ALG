Algoritmo "eleitores"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Obama
// Descri��o   : Solicitar as informa��es da elei��o e mostrar suas porcentagens
// Autor(a)    : Beatriz
// Data atual  : 23/03/2022
Var
// Se��o de Declara��es das vari�veis 
eleitores,validos,brancos,nulos:inteiro
porcentagemvotosvalidos, porcentagemvotosbrancos, porcentagemvotosnulos:real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
escreva("Digite o n�mero total de eleitores de um munic�pio: ") //saida de dados
leia(eleitores) //entrada de dados
escreva("Digite o n�mero total de votos v�lidos: ") //saida de dados
leia(validos) //entrada de dados
escreva("Digite o n�mero total de votos brancos: ") //saida de dados
leia(brancos) //entrada de dados
escreva("Digite o n�mero total de votos nulos: ") //saida de dados
leia(nulos) //entrada de dados
porcentagemvotosvalidos <- validos/eleitores*100 //processamneto de dados
porcentagemvotosbrancos <- brancos/eleitores*100 //processamneto de dados
porcentagemvotosnulos <- nulos/eleitores*100 //processamneto de dados
escreval("A porcentagem de votos v�lidos corresponde a: ",porcentagemvotosvalidos, "%") //saida de dados
escreval("A porcentagem de votos brancos corresponde a: ",porcentagemvotosbrancos, "%") //saida de dados
escreval("A porcentagem de votos nulos corresponde a: ",porcentagemvotosnulos, "%") //saida de dados

Fimalgoritmo