const ligne1 = document.getElementById("ligne-1");
const ligne2 = document.getElementById("ligne-2");
const ligne3 = document.getElementById("ligne-3");

const box = document.getElementById("box");

box.addEventListener("click",(event)=>{
    ligne2.classList.toggle("hide");
    ligne1.classList.toggle("rotate1");
    ligne3.classList.toggle("rotate2");
})