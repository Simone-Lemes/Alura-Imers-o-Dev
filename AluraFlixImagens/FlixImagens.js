alert ("📷 Vamos adicionar fotos a uma coleção 📷  \nVocê deve copiar o link de uma imagem jpg e inserir no campo endereço de imagem");

function adicionarImagens() {
    var campoImagemFavorita = document.querySelector('#imagem')
    var imagemFavorita = campoImagemFavorita.value
    if (imagemFavorita.endsWith('.jpg')) {
    listarImagensNaTela(imagemFavorita)
 } else {
     alert("Imagem Inválida")
 }
 campoImagemFavorita.value = ""
 }
 
 
 function listarImagensNaTela(imagem) {
     var listaImagens = document.querySelector('#listaImagens')
     var elementoImagem = "<img src=" + imagem + ">"
     listaImagens.innerHTML = listaImagens.innerHTML + elementoImagem
   }


   

  