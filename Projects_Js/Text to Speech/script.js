let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");
window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices(); //get all the voices available on the device
    speech.voice=voices[0];
    voices.forEach((voice,i)=>(voiceSelect.options[i] = new Option(voice.name,i)));
}

voiceSelect.addEventListener("change",()=>{
    speech.voice = voices[voiceSelect.value];//because voiceSelect.value return index 
})

document.querySelector("button").addEventListener("click",(event)=>{
    speech.text = document.querySelector("textarea").value;
    // window.speechSynthesis.speak(speech);
    if ('speechSynthesis' in window){    
        window.speechSynthesis.speak(speech);
    } else {
        alert("Votre navigateur ne prend pas en charge la synthèse vocale.");
    }
})
//website coming soon principe 
var x = new Date("Sep 18, 2025 00:00:00").getTime(); //affiche le temps en millisecondes
var y = new Date().getTime();
var dis = x-y;
var days = Math.floor(dis/(1000*60*60*24))
var hours = Math.floor(dis%(1000*60*60*24)/(1000*60*60))
var minutes = Math.floor(dis%(1000*60*60)/(1000*60))
var seconds = Math.floor(dis%(1000*60)/1000)
console.log(days);
console.log(hours);
console.log(minutes);
console.log(seconds);
