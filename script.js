function abrirCarta(){

document.getElementById("inicio").style.display="none";
document.getElementById("carta").style.display="flex";

document.getElementById("music").play().catch(()=>{});

}

function mostrarRecuerdos(){

document.getElementById("carta").style.display="none";
document.getElementById("recuerdos").style.display="flex";

}

function mostrarRazones(){

document.getElementById("recuerdos").style.display="none";
document.getElementById("razones").style.display="flex";

}

function finalAmor(){

document.getElementById("razones").style.display="none";
document.getElementById("final").style.display="flex";

}

function llenarAmor(){

let numero=0;

let intervalo=setInterval(()=>{

numero++;

document.getElementById("contador").innerText=numero+"%";

if(numero>=100){

clearInterval(intervalo);

document.getElementById("mensajeFinal").innerHTML=
"Te amo muchísimo amorchis. Gracias por hacer mi vida y mis dias tan bonitos. ❤️";

for(let i=0;i<120;i++){

crearCorazon();

}

}

},20);

}

function crearCorazon(){

let heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💗";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(Math.random()*3+3)+"s";

document.getElementById("hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

setInterval(()=>{

crearCorazon();

},500);