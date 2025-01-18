const input = document.getElementById("input-box");
const qrimage = document.getElementById("imgqr");
const imgbox = document.getElementById("imgbox");

function generateQr(){
    if(input.value.length>0){
        reset();
        setTimeout(() => {
            qrimage.style.animation = "pop 0.5s ease-in-out forwards";
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        }, 10);
    }
    else{
        input.classList.add("error");
        setTimeout(() => {
            input.classList.remove("error");
        }, 1000);
    }
   
    
}

function reset(){
    qrimage.style.removeProperty("animation");
}
