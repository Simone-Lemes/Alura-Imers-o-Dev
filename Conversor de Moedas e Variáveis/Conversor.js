var valorEmDolarTexto = prompt("Qual valor em dólar você quer converter?");

var valorEmDolarTexto = parseFloat(valorEmDolarTexto);

var valorEmReal = valorEmDolarTexto* 5.54;
var valorEmRealFixado = valorEmReal.toFixed (2);
//Valor em real multiplicado pelo valor em dólar, fixado em 2 casas decimais usando o toFixed,(pode alterar esse valor de casas decimais pra quantas vc precisar) 

alert("O Valor em Real é R$ " + valorEmRealFixado);

//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt 

//operações + somar * multiplicar 