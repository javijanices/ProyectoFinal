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

function lorem1(){
    return Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem neque repellendus ad incidunt doloremque sapient;
}

function lorem2(){
    return Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat elit sit amet nibh varius dictum;
}

