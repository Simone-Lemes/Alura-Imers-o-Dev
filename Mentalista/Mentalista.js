alert ("🔮 O Mentalista 🔮 \nVocê precisa descobrir o número secreto, Vamos lá \nClique em OK para começar ");

// Variável de número aleatório
var numeroSecreto = parseInt(Math.random() * 10);

//alert (numeroSecreto) (Mostra o número secreto escolhido pelo random)
// var numeroSecreto = 3; (Variável de Número pre definido)

var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10"));

  if (numeroSecreto == chute) {
    alert(" 🤗 Acertou, Parabéns!!! ");
    break;
  } else if (chute > numeroSecreto) {
    alert(" O número secreto é menor ");
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto) {
    alert(" O número secreto é maior ");
    tentativas = tentativas - 1;
  }
}
if (chute != numeroSecreto) {
  alert(" Ah que pena 😟 suas tentativas acabaram. O número secreto era " + numeroSecreto);
}
