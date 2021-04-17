var listaFilmes = ["https://www.wiisworld.com/images/news/newspics/mkwii-bowser.jpg", "https://th.bing.com/th/id/R214226794ca8783dcc148981e8993e41?rik=8h0so4o2591WKA&riu=http%3a%2f%2fstatic1.gamespot.com%2fuploads%2fscale_medium%2f1197%2f11970954%2f2440718-mario_kart_8_box_art.jpg&ehk=GKPufkSWI2F5OhWpSr3TAAtbyh8%2fJTewzDnOlE62bUU%3d&risl=&pid=ImgRaw","https://upload.wikimedia.org/wikipedia/en/c/cc/Mario_Kart_Tour_app_icon_as_of_version_2.0.0.png","https://www.wiisworld.com/images/news/newspics/mkwii-waluigi.jpg","https://cdn.wallpapersafari.com/94/57/NE81sG.jpg","https://www.hdwallpapers.in/download/mario_kart_8_deluxe-1280x960.jpg"]

var listaNomesFilmes = ["", "", "", "", "", "",""]

var trailerFilmes = ["https://fb.watch/4ToXAyLNhK/","https://fb.watch/4Tp5q0GOKT/","https://fb.watch/4Tp1XbjXul/","https://fb.watch/4Tp8_hsvPK/","https://fb.watch/4TpaSFZiS-/","https://fb.watch/4Tpev6Z2Ye/","https://fb.watch/4Tpk1hzt_X/"]


let posterArrF = "";
for (var i=0; i<listaFilmes.length; i++) {
  posterArrF += '<div class="conteudoFilme"> <div class="imagem"> <a class="movie" href='+trailerFilmes[i]+' target="_blank"> <img src='+listaFilmes[i]+' class="imagensFilme"> </a> </div> <h2>'+listaNomesFilmes[i]+'</h2> </div>';
}
document.write("<h3>Melhores Lives de Mario Kart</h3>")
document.write(`<div class="posterBox">${posterArrF}</div>`)

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
   var listaFilmes = document.querySelector
   ('#listaFilmes')
   var elementoFilme = "<img src=" + filme + ">"
   listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
 }


 

 

 
