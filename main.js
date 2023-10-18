function tocaSomPom(){
    document.querySelector(idElementoAudio).play('')
}

const listaDeTeclas = document.querySelectorAll(idElementoAudio);

listaDeTeclas[0].onclick = tocaSomPom;

let contador = 0;

while(contador < 9){
    listaDeTeclas[contador].onclick = function(){tocaSomPom('#som_tecla_clap')
};
contador = contador + 1;
}







