let horaDeInicio, horaDoFinal, total, total1;

alert('Vamos calcular o tempo de duração de uma partida de xadrez. Pressione OK ou ENTER.')
horaDeInicio = parseInt(prompt('Insira a hora de início do jogo:'));
horaDoFinal = parseInt(prompt('Insira a hora do fim do jogo:'));
total = (horaDoFinal - horaDeInicio)
if (total > 0) {
    alert(`A partida de xadrez durou ${total} horas.`)
} else {
    total1 = total + 24
    alert (`O jogo durou ${total1} horas.`)
}