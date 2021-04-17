//Criador de objeto para os items
//imagem, texto, wikipedia, youtube
function MarioItem(i, t, w, v) {
    this.imagem = i;
    this.texto = t;
    this.info = w;
    this.video = v;
  }
  
  //Cria os objetos e adiciona nesse array
  var mario = [];
  function criaItemMario(i, t, w, v) {
    var tmpObj = new MarioItem(i, t, w, v);
    mario.push(tmpObj);
  }
  
  //adicionando os items
  criaItemMario("https://th.bing.com/th/id/OIP.pFn3faElndp9EV5wDTqeRwHaKL?pid=ImgDet&rs=1", "Sonic Mania", "https://pt.wikipedia.org/wiki/Sonic_the_Hedgehog","https://www.youtube.com/embed/1RBoNgNC-lE");
  criaItemMario("https://www.videogameschronicle.com/files/2020/01/donkey-kong-country-tropical-freeze-uhd-4k-wallpaper-scaled-e1578051728513.jpg", "Donkey Kong","https://pt.wikipedia.org/wiki/Donkey_Kong", "https://www.youtube.com/embed/lrtAIAK7lIA");
  criaItemMario("https://th.bing.com/th/id/OIP.JZaB-5DbaQbcQ5CNL-8C6AHaM5?pid=ImgDet&rs=1", "Super Mario broz", "https://pt.wikipedia.org/wiki/Super_Mario_Bros.", "https://www.youtube.com/embed/9N30BzwnkA8");
  criaItemMario("https://www.actugaming.net/wp-content/uploads/2019/08/fall-guys-jaquette.jpg", "Fall Guys","https://pt.wikipedia.org/wiki/Fall_Guys", "https://www.youtube.com/embed/P7cqD-mE6Z4");
  criaItemMario("https://www.consoleroms.com/img/roms/super-mario-world-thumb.jpg", "Super Mario World","https://pt.wikipedia.org/wiki/Super_Mario_World", "https://www.youtube.com/embed/k5ahKfoT8C0");
  criaItemMario("https://th.bing.com/th/id/OIP.LgVsS2EeLkzalMkUovj-lQHaKO?pid=ImgDet&rs=1", "Golden Axe","https://pt.wikipedia.org/wiki/Golden_Axe", "https://www.youtube.com/embed/VXZ4xbz-xhk");
  criaItemMario("https://media.senscritique.com/media/000017155557/source_big/Streets_of_Rage.jpg", "Streets of Rage","https://pt.wikipedia.org/wiki/Streets_of_Rage", "https://www.youtube.com/embed/JkutwZYLWEY");
  
  
  //Embaralha os items só para não parecer tendênciosso ou algo assim
  var tmpArray = [];
  while (mario.length > 0) {
    var nAleatorio = parseInt( Math.random() * mario.length);
    tmpArray.push(mario[nAleatorio]);
    mario.splice(nAleatorio,1);
  }
  mario = tmpArray;
  
  //Coloca os items no documento
  for (var i = 0; i < mario.length; i++) {
    //criando div, imagem, texto e botões
    var imgItemDiv = document.createElement("div");
    var imgMoldura = document.createElement("div");
    var molduraCover = document.createElement("div");
    var traiBtn = document.createElement("button");
    var infoBtn = document.createElement("button");
    var txtBaixo = document.createElement("p");
    
    //adicionando alguns identificadores para usar no CSS
    imgItemDiv.classList.add("mario-item");
    imgMoldura.classList.add("img-moldura");
    molduraCover.classList.add("moldura-cover");
    infoBtn.id = "info-btn";
    traiBtn.id = "trai-btn";
    
    //adicionando imagem, texto e função para os botões
    imgMoldura.style.backgroundImage = `url(${mario[i].imagem})`;
    imgMoldura.style.backgroundSize = "cover";
    txtBaixo.innerHTML = mario[i].texto;
    traiBtn.setAttribute("onclick", `exibeInfo('${mario[i].video}')`);
    traiBtn.innerHTML="LIVE GAME 🎮🕹️";
    infoBtn.setAttribute("onclick", `exibeInfo('${mario[i].info}')`);
    infoBtn.innerHTML="INFO DO JOGO 📘📖";
    
    
    //anexando tudo e escrevendo na página
    molduraCover.append(infoBtn, traiBtn)
    imgMoldura.append(molduraCover)
    imgItemDiv.append(imgMoldura, txtBaixo);
    document.getElementById("items").appendChild(imgItemDiv);
  }
  
  //Exibe um iframe com informações ou trailer
  function exibeInfo(url) {
    var divIframe = document.getElementById("iframe-info");
    var novoIframe = document.createElement("iframe");
    novoIframe.setAttribute("src", url);
    novoIframe.id = "info";
    divIframe.appendChild(novoIframe);
    
    var divPopUp = document.getElementById("info-container");
    divPopUp.className = "info-exibe";
  }
  
  //Oculta o PopUP, usado no botão fechar do Iframe
  function fechaInfo() {
    var divPopUp = document.getElementById("info-container");
    divPopUp.className="info-oculta";
    
    var velhoIframe = document.getElementById("info");
    velhoIframe.remove();
  }
  
  