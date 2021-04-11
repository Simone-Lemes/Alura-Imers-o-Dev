alert ("🤑💵 Conversor de moedas💵🤑 \nVocê deve digitar o número que deseja calcular em Libra para converter em Dólar \nClique em OK para começar ");

//Cálculo Libra para Dólar
var valorEmLibraTexto = prompt("Qual valor em Libras você quer converter?");

var valorEmLibraTexto = parseFloat(valorEmLibraTexto);

var valorEmDolar = valorEmLibraTexto* 1.39;
var valorEmDolarFixado = valorEmDolar.toFixed (2);
//Valor em libra multiplicado pelo valor em dólar, fixado em 2 casas decimais usando o toFixed,(pode alterar esse valor de casas decimais pra quantas vc precisar) 

alert("O Valor em Dólares é U$ " + valorEmDolarFixado);

//Cálculo Dólar para Libra
var valorEmDolarTexto = prompt("Qual valor em Dólares você quer converter?");

var valorEmDolarTexto = parseFloat(valorEmDolarTexto);

var valorEmLibra = valorEmDolarTexto* 0.72;
var valorEmLibraFixado = valorEmLibra.toFixed (2);
//Valor em dólar multiplicado pelo valor em libra, fixado em 2 casas decimais usando o toFixed,(pode alterar esse valor de casas decimais pra quantas vc precisar) 

alert("O Valor em Libras é G$ " + valorEmLibraFixado);

//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt 

//operações + somar * multiplicar 