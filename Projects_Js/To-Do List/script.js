const input = document.querySelector("input");
const task = document.querySelector(".tasks");
document.querySelector("button").addEventListener("click",(event)=>{
    if(input.value!==""){
        const taskContainer = document.createElement("div");  
        taskContainer.classList.add("checkbox-container");
        const check = document.createElement("input");
        check.type="checkbox";
        const TaskText = document.createElement("p");
        TaskText.textContent = input.value;
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");

        check.classList.add("checkbox");
        TaskText.classList.add("text");
        span1.classList.add("one");
        span2.classList.add("two");

        taskContainer.appendChild(check);
        taskContainer.appendChild(TaskText);
        taskContainer.appendChild(span1);
        taskContainer.appendChild(span2);
        task.appendChild(taskContainer);
        
        input.value = "";
        // span1.addEventListener("click", (event) => {
        //     event.target.parentElement.remove(); 
        // });
        // span1.addEventListener("click", (event) => {
        //     taskContainer.remove(); 
        //     saveData();
        // });
       
        saveData();
        
        
    }
})
const check = document.getElementsByClassName("checkbox")

function saveData() {
    localStorage.setItem("data", task.innerHTML);
}
task.addEventListener("click",(event)=>{  // car task > div > span
     if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData()
     }
    //  else if(event.target.tagName === "TEXT"){
    //     event.target.classList.toggle("checked");
    //  }
})
function loadData(){
    const savedData = localStorage.getItem("data");
    if (savedData) {
        task.innerHTML += savedData; 
    
    }
}
loadData();