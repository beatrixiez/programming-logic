let carrosVendidos, valorTotalVendas, salarioFixo, valorCarrosVendidos, comissaoFixa, comissaoVariavel, salarioFinal;

alert('Vamos calcular o salário de um vendedor que ganha uma comissão fixa por carro vendido e uma de 5% pelo total das vendas. Pressione ENTER ou OK')
carrosVendidos = parseInt(prompt('Digite a quantidade de carros vendidos: '));
valorTotalVendas = parseFloat(prompt('Digite o valor total de suas vendas - sem pontos e vírgulas: '));
salarioFixo = parseFloat(prompt('Digite o seu salário fixo - sem pontos e vírgulas: '));
valorCarrosVendidos = parseFloat(prompt('Digite o valor que você recebe por cada carro vendido - sem pontos e vírgulas: '));
comissaoFixa = (carrosVendidos * valorCarrosVendidos);
comissaoVariavel = (valorTotalVendas * 0.05);
salarioFinal = (salarioFixo + comissaoFixa + comissaoVariavel);
alert('O salário final corresponde a: R$' + salarioFinal)