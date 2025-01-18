const api_url = 'https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?';
const quote = document.getElementById("quote");
const btn = document.getElementById("btn");
const auteur = document.getElementsByClassName("two");


async function  getquote(url){
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    auteur.innerHTML = data.author;
    
}
btn.addEventListener("click",(event)=>{
    getquote(api_url)
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + auteur.innerHTML,"tweet window",
        "width=600,height=300 ");
}