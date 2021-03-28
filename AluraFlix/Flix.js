var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg,","https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTEzNzY0OTg0NTdeQTJeQWpwZ15BbWU4MDU3OTg3MjUz._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var listaNomesFilmes = ["Toy Story", "Monstros S.A", "Procurando o Nemo", "Up: Altas Aventuras", "Os Incríveis 2", "Como treinar o seu Dragão"]

var trailerFilmes = ["https://www.imdb.com/video/imdb/vi2052129305?playlistId=tt0114709&ref_=tt_ov_vi","https://www.imdb.com/video/imdb/vi518890521?playlistId=tt0198781&ref_=tt_ov_vi","https://youtu.be/jt3-3LtSj6c","https://youtu.be/0WWzgGyAH6Y","https://youtu.be/T6DJcgm3wNY","https://youtu.be/VIDmMoSeG30","https://youtu.be/t433PEQGErc"]

let posterArrF = "";
for (var i=0; i<listaFilmes.length; i++) {
  posterArrF += '<div class="conteudoFilme"> <div class="imagem"> <a class="movie" href='+trailerFilmes[i]+' target="_blank"> <img src='+listaFilmes[i]+' class="imagensFilme"> </a> </div> <h3>'+listaNomesFilmes[i]+'</h3> </div>';
}
document.write("<h2>Filmes</h2>")
document.write(`<div class="posterBox">${posterArrF}</div>`)





