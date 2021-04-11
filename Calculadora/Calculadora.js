alert ("🤑🤔 Vamos fazer umas operações matemáticas ? 🤔🤑 \nVocê deve digitar o número que deseja calcular \nClique em OK para começar ");

var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
//var primeiroValorInt = parseInt(primeiroValor); (Também pode ser escrito assim)
var segundoValor = parseInt(prompt("Digite o segundo valor: "))

//cálculos
var  operacao = prompt("Digite: \n1 para fazer uma divisão \n2 para fazer uma multiplicação \n3 para soma  \n4 para subtração \nVeja o resultado na tela da calculadora ")


if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    //mostrar o h2 do html na calculadora
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    //mostrar o h2 do html na calculadora
    document.write("<h2>" + primeiroValor + " x " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    //mostrar o h2 do html na calculadora
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
}else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    //mostrar o h2 do html na calculadora
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
} else {
    document.write("<h2>Opção inválida</h2>")
}
 
//escrevendo na tela = document.write()
//concatenação = juntar palavras ("palavra" + "variável")
// == (comparação) é diferente do = que usamos para fazer atribuição

//if = se
//else = senão
//else if = se não se




