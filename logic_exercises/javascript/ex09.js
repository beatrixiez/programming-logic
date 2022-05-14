let salarioAtual, reajuste, aumentoSalarial, salarioFinal;

alert('Vamos calcular um reajuste salarial. Pressione ENTER ou OK')

salarioAtual = parseFloat(prompt('Digite seu salário atual - não adicionar pontos e vírgulas: '));
reajuste = parseFloat(prompt('Digite o percentual de reajuste - não adicionar o sinal de porcentagem %: '));

aumentoSalarial = (reajuste / 100 * salarioAtual);
salarioFinal = (aumentoSalarial + salarioAtual);

alert('O salário final corresponde a: R$' + salarioFinal)
