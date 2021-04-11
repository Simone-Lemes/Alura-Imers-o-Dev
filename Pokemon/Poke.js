alert ("🎮 Descubra o nome do Pokémon escolhendo um número de 1 a 3 \nClique em OK para começar🎮");

var identificacao = parseInt(prompt("Qual o nome desse Pokémon ? Digite: \n1 para Charmeleon \n2 para Charizard \n3 para Charmander"))
var nome = "Parabéns!!! 🥳 \nVocê acertou esse é o Charmander"

if (identificacao == 3) {
    var resultado = nome
    //mostrar o h2 do html na calculadora
    document.write("<h2>" + nome + "</h2>")    
} else {
    document.write("<h2>Que pena 😓 você errou o nome dele é Charmander \n</h2>")
}
 
//escrevendo na tela = document.write()
//concatenação = juntar palavras ("palavra" + "variável")
// == (comparação) é diferente do = que usamos para fazer atribuição

//if = se
//else = senão
//else if = se não se







