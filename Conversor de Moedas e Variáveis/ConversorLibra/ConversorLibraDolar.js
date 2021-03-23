//Cálculo Libra para Dólar
var valorEmLibraTexto = prompt("Qual valor em Libra você quer converter?");

var valorEmLibraTexto = parseFloat(valorEmLibraTexto);

var valorEmDolar = valorEmLibraTexto* 1.39;
var valorEmDolarFixado = valorEmDolar.toFixed (2);
//Valor em libra multiplicado pelo valor em dólar, fixado em 2 casas decimais usando o toFixed,(pode alterar esse valor de casas decimais pra quantas vc precisar) 

alert("O Valor em Dolar é U$ " + valorEmDolarFixado);

//Cálculo Dólar para Libra
var valorEmDolarTexto = prompt("Qual valor em Dólar você quer converter?");

var valorEmDolarTexto = parseFloat(valorEmDolarTexto);

var valorEmLibra = valorEmDolarTexto* 0.72;
var valorEmLibraFixado = valorEmLibra.toFixed (2);
//Valor em dólar multiplicado pelo valor em libra, fixado em 2 casas decimais usando o toFixed,(pode alterar esse valor de casas decimais pra quantas vc precisar) 

alert("O Valor em Libra é G$ " + valorEmLibraFixado);

//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt 

//operações + somar * multiplicar 