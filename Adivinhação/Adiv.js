var numeroAleatorio = parseInt(Math.random()* 10)
var numeroTentativas = 3;

            while (numeroTentativas > 0) {
                var numeroChute = parseInt(prompt("Digite um número entre 0 e 10"));

                numeroTentativas--
                if (numeroAleatorio == numeroChute) {
                    alert(" Acertou ");
                break;
               
               } else if (numeroChute > numeroAleatorio) {
                alert (" O número secreto é menor ");
                continue;
               
               } else if (numeroChute < numeroAleatorio) {
                alert (" O número secreto é maior ");
                continue;
            }
          }
                if (numeroChute != numeroAleatorio) {
                alert (" Suas tentativas acabaram. O número secreto era " + numeroAleatorio);
      }
            
        
                   
                
            
            