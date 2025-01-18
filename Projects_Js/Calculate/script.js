let display = document.getElementById("display");


function cleardisplay(){
    display.value = "";
}

function appendTodisplay(input){
    display.value += input;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error;
    }
}

function deletenumber(){
    display.value =  display.value.slice(0,-1);
}