const submit = document.getElementById("submit");

submit.addEventListener("click",(event)=>{
    const div = document.createElement("div");
    submit.style.display="none";
    div.classList.add("container");
    const img = document.createElement("img");
    img.src="verified.png";
    const h1 = document.createElement("h1");
    h1.textContent="Thank You!";
    const p = document.createElement("p");
    p.textContent="Your details has been successfully submitted. Thanks!";
    const btn = document.createElement("button");
    btn.classList.add("ok");
    btn.textContent="OK";
    const content = document.createElement("div");
    content.classList.add("content");
    content.appendChild(img);
    content.appendChild(h1);
    content.appendChild(p);
    content.appendChild(btn);
    div.appendChild(img);
    div.appendChild(content);
    document.body.appendChild(div);
    
    // setTimeout(() => {
    //     div.classList.add("open-popup");
    // }, 10);

    btn.addEventListener("click", () => {
        div.remove();
        submit.style.display = "block"; 
    })
    
})