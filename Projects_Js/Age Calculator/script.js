const container = document.getElementById("container");
const date = document.getElementById("date");
date.max= new Date().toISOString().split("T")[0];
const btn = document.getElementById("calc")
btn.addEventListener("click",calculateAge);

function calculateAge(){
    resetAge();
    let birthDate = new Date(date.value);
    
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth()+1;
    let y2 = today.getFullYear();

    let y3,m3,d3;
    y3= y2-y1;

    if(m2 >= m1){
        m3=m2-m1;
    }
    else{
        y3--;
        m3= 12+m2-m1;
    }
    if(d2>=d1){
        d3 = d2 - d1;
    }
    else{
       m3--;
       d3= getDaysInMonth(y1,m1)+d2-d1;
    }
    
    const p = document.createElement("p");
    p.classList.add("result");
    p.innerHTML=`you are <span>${y3}</span> years , <span>${m3}</span> months and <span>${d3}</span> days old`;
    container.appendChild(p);

}

function getDaysInMonth(years,month){
    return new Date(years,month,0).getDate()//getdate return nombre du jour
}

function resetAge(){
    container.lastChild.remove();
}
