//inserir imagens no Array
var listaFilmes = ["https://bit.ly/3cnk0sL", "https://bit.ly/3lQibYB","https://bit.ly/3waLdXI", "https://bit.ly/3tW0zNC", "https://bit.ly/3d253vq", "https://bit.ly/3lQSCGN", ""];

//Mostra a imagem do Array em HTML
for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src =" + listaFilmes [i] + ">")
}