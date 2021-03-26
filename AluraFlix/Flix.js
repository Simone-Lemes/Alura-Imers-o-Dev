//inserir imagens no Array
var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"];

//Mostra a imagem do Array em HTML
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src =" + listaFilmes [i] + ">")
}