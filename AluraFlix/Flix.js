var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg,","https://m.media-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMTk3NDE2NzI4NF5BMl5BanBnXkFtZTgwNzE1MzEyMTE@._V1_UX182_CR0,0,182,268_AL_.jpg","https://m.media-amazon.com/images/M/MV5BMjA5NDQyMjc2NF5BMl5BanBnXkFtZTcwMjg5ODcyMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"]

var listaNomesFilmes = ["Toy Story", "Monstros S.A", "Procurando o Nemo", "Up: Altas Aventuras", "Como treinar o seu Dragão"]

var trailerFilmes = ["https://www.imdb.com/video/imdb/vi2052129305?playlistId=tt0114709&ref_=tt_ov_vi","https://www.imdb.com/video/imdb/vi518890521?playlistId=tt0198781&ref_=tt_ov_vi","https://www.imdb.com/video/imdb/vi2687214105?playlistId=tt0266543&ref_=tt_pr_ov_vi","https://www.imdb.com/video/imdb/vi2557280793?playlistId=tt1049413&ref_=tt_pr_ov_vi","https://www.imdb.com/video/imdb/vi1158218777?playlistId=tt0892769&ref_=tt_pr_ov_vi"]

let posterArrF = "";
for (var i=0; i<listaFilmes.length; i++) {
  posterArrF += '<div class="conteudoFilme"> <div class="imagem"> <a class="movie" href='+trailerFilmes[i]+' target="_blank"> <img src='+listaFilmes[i]+' class="imagensFilme"> </a> </div> <h2>'+listaNomesFilmes[i]+'</h2> </div>';
}
document.write("<h1>Filmes</h1>")
document.write(`<div class="posterBox">${posterArrF}</div>`)





