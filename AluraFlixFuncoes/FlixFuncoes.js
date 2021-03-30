function adicionarFilme() {
    var campoFilmeFavorito = document.querySelector('#filme')
    var filmeFavorito = campoFilmeFavorito.value
    if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
 } else {
     alert("Imagem Inválida")
 }
 campoFilmeFavorito.value = ""
 }
 
 
 function listarFilmesNaTela(filme) {
     var listaFilmes = document.querySelector('#listaFilmes')
     var elementoFilme = "<img src=" + filme + ">"
     listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
   }


   var videoFilmes = ["https://www.youtube.com/embed/tQ0yjYUFKAE","https://www.youtube.com/embed/LCY9uGRuCio","https://www.youtube.com/embed/BSzSn-PRdtI"] // lista dos videos clips


   function listarVideoNaTela(video){
    var listaFilmes = document.querySelector('#listaVideo')
    console.log(video)
    var elementoVideo = "<iframe width= 560 height= 315 "+ "src= "+video+ " title= YouTube video player "+ "frameborder= 0 "+"allow= accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"+" allowfullscreen></iframe>"
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoVideo
  } // funçao que pega o resultado da função adicionarVideo() e manda a imagem pro HTML sem problemas



  