let time1, time2, golsMarcadosTime1, golsMarcadosTime2

alert('Vamos verificar que time ganhou a partida ou declarar empate. Pressione OK ou ENTER.')

time1 = prompt('Qual o nome do primeiro time?')
golsMarcadosTime1 = parseInt(prompt(`Quantos gols o time ${time1} marcou?`))
time2 = prompt('Qual o nome do segundo time?')
golsMarcadosTime2 = parseInt(prompt(`Quantos gols o time ${time2} marcou?`))

if (golsMarcadosTime1 > golsMarcadosTime2) {
    alert(`O time ${time1} ganhou a partida!`)
} else if (golsMarcadosTime1 < golsMarcadosTime2) {
    alert(`O time ${time2} ganhou a partida!`)
} else {
    alert('Nenhum time ganhou, o jogo ficou empatado.')
}