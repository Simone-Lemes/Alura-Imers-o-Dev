alert ("🌡️ Conversor de Temperatura 🌡️ \nVocê deve digitar o valor que deseja converter \nClique em OK para começar ");

// Cálculo de Celsius para Fahrenheit
var valorEmCelsiusTexto = prompt("Digite o valor em graus Celsius que você quer converter?");

var valorEmCelsiusTexto = parseInt(valorEmCelsiusTexto);

var valorEmFahrenheit = (valorEmCelsiusTexto * 1.8) +  32;
var valorEmFahrenheitFixado = valorEmFahrenheit.toFixed (1);

alert("🌡️ O Valor em Fahrenheit é de 🌡️ " + valorEmFahrenheitFixado);



//Cálculo de Fahrenheit para Celsius
var valorEmFahrenheitTexto = prompt("Digite o valor em Fahrenheit que você quer converter?");

var valorEmFahrenheitTexto = parseInt(valorEmFahrenheitTexto);

var valorEmCelsius = (valorEmFahrenheitTexto - 32) / 1.8 ;
var valorEmCelsiusFixado = valorEmCelsius.toFixed (1);

alert("🌡️ O Valor em graus Celsius é de 🌡️ " + valorEmCelsiusFixado);

//Revisão

//variáveis var int - float - string

//alert - parseInt - parseFloat - prompt 

//operações + somar * multiplicar 