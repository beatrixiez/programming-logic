let numero1, numero2;

alert('Vamos ler dois valores e colocá-los em ordem crescente. Pressione OK ou ENTER.')

numero1 = parseFloat(prompt('Insira um número:'));
numero2 = parseFloat(prompt('Insira outro número'));

(numero1 > numero2) ? alert(`Em ordem crescente: ${numero2} - ${numero1}`): alert(`Em ordem crescente: ${numero1} - ${numero2}`)