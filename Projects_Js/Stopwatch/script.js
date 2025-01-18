let display = document.getElementById("display");
const stop = document.getElementById("stop")
const play = document.getElementById("play")
const reset = document.getElementById("reset")

let seconde = 0;
let minutes = 0;
let hours = 0;
let interval= null;

function updatechrono(){
    seconde++;
    if(seconde === 60){
        seconde=0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconde)}`;
}

function formatTime(time){
    return time<10?`0${time}`:time;
}

play.addEventListener("click",(event)=>{
    if(interval!==null){
        clearInterval(interval);//pour que chaque 1s et non pas un temps definit par nombre de click
    }
    interval= setInterval(updatechrono,1000)//execute updatechrono every 1s et return un id
        
})

reset.addEventListener("click",(event)=>{
    clearInterval(interval); //to pause timer();
    seconde=0;
    hours=0;
    minutes=0;
    display.textContent=`00:00:00`;
    
})

stop.addEventListener("click",(event)=>{
    clearInterval(interval); //to pause timer();
})


