alert ("🤗🔮 Vamos brincar de adivinhação ? 🔮🤗\nVocê deve tentar descobrir qual é o número secreto\nClique em OK para começar");

var numeroAleatorio = parseInt(Math.random()* 10)
var numeroTentativas = 3;

            while (numeroTentativas > 0) {
                var numeroChute = parseInt(prompt("Digite um número entre 0 e 10"));

                numeroTentativas--
                if (numeroAleatorio == numeroChute) {
                    alert(" Parabéns você acertou!!😀🥳 ");
                break;
               
               } else if (numeroChute > numeroAleatorio) {
                alert (" O número secreto é menor, tente novamente ");
                continue;
               
               } else if (numeroChute < numeroAleatorio) {
                alert (" O número secreto é maior, você está quase lá");
                continue;
            }
          }
                if (numeroChute != numeroAleatorio) {
                alert ("Que pena 😓 suas tentativas acabaram. O número secreto era " + numeroAleatorio);
      }
            
        
                   
                
            
            