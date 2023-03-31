// menu Lateral

var menuVisible = false;
let menu = document.getElementById("nav");
function mostrarMenu(){
    if(menuVisible == false){
        menu.style.display = "block";
        menuVisible = true;
    }
    else{
        menu.style.display = "none";
        menuVisible = false;
    }
}

let vinculos = document.querySelectorAll("nav a");
for(var i=0; i < vinculos.length; i++){
    vinculos[i].onclick = function(){
        menu.style.display = "none";
        menuVisible = false;
    }
}

let texto1 = document.getElementById("lorem1");
function completarInfo(texto1){
    texto1 = lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque repellendus ad incidunt doloremque sapient;
    return texto1;
}

let texto2 = document.getElementById("lorem2");
function Info(texto2){
    texto2 = Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat elit sit amet nibh varius dictum;
    return texto2;
}

