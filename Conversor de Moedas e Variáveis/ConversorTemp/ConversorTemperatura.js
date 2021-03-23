// Cálculo de Celsius para Fahrenheit
var valorEmCelsiusTexto = prompt("Qual valor em Celsius que você quer converter?");

var valorEmCelsiusTexto = parseInt(valorEmCelsiusTexto);

var valorEmFahrenheit = (valorEmCelsiusTexto * 1.8) +  32;
var valorEmFahrenheitFixado = valorEmFahrenheit.toFixed (1);

alert("O Valor em Fahrenheit é " + valorEmFahrenheitFixado);



//Cálculo de Fahrenheit para Celsius
var valorEmFahrenheitTexto = prompt("Qual valor em Fahrenheit que você quer converter?");

var valorEmFahrenheitTexto = parseInt(valorEmFahrenheitTexto);

var valorEmCelsius = (valorEmFahrenheitTexto - 32) / 1.8 ;
var valorEmCelsiusFixado = valorEmCelsius.toFixed (1);

alert("O Valor em Celsius é " + valorEmCelsiusFixado);

//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt 

//operações + somar * multiplicar 