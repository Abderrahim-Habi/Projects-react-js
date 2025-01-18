const notecontainer = document.querySelector(".Note");
const btn = document.getElementById("Create_Note");
let notes = document.querySelectorAll(".input-box");

btn.addEventListener("click",(event)=>{
    const p = document.createElement("p");
    const img = document.createElement("img")
    img.setAttribute("src", "trash_bin_icon-icons.com_67981.png");
    p.classList.add("input-box");
    p.setAttribute("contenteditable","true");
    p.appendChild(img);
    notecontainer.appendChild(p);
})

notecontainer.addEventListener("click",(event)=>{
   if(event.target.tagName=== "IMG" ){
    event.target.parentElement.remove();
    saveData();
   }
   else if(event.target.tagName==="P"){
    notes = document.querySelectorAll(".input-box");//return nodeList de tous les .input-box
    notes.forEach(nt=>{
        nt.onkeyup = function(){// Cela signifie que chaque fois qu'une touche est relâchée lorsqu'un élément a le focus, cette fonction sera exécutée.
            saveData();
            console.log("hhhhh")
        }
    })
   }
})
function saveData() {
    localStorage.setItem("notes", notecontainer.innerHTML);

}
function loadData(){
    const savedData = localStorage.getItem("notes");
    if (savedData) {
        notecontainer.innerHTML += savedData; 
    
    }
}
loadData();
document.addEventListener("keydown",(event)=>{
    if(event.key==="Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})