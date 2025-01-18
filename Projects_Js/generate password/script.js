const password = document.getElementById("password");
const length = 12;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
const AllChars = uppercase + lowercase + number + symbols;
const btn = document.getElementById("btn")

function createPassword(){
    let pass = "";
    pass +=uppercase[Math.floor(Math.random() * uppercase.length)];
    pass +=lowercase[Math.floor(Math.random() * lowercase.length)];
    pass +=number[Math.floor(Math.random() * number.length)];
    pass +=symbols[Math.floor(Math.random() * symbols.length)];
    while(length>pass.length){
        pass += AllChars[Math.floor(Math.random() * AllChars.length)];
    }
    password.value = pass;
}

function copyPassword(){
    password.select();
    document.execCommand("copy"); //Cela copie le texte sélectionné dans le presse-papiers.
}

// function copyPassword() {
//     const password = document.getElementById("password");
//     navigator.clipboard.writeText(password.value)
//         .then(() => {
//             alert("Mot de passe copié dans le presse-papiers !");
//         })
//         .catch(err => {
//             console.error("Erreur lors de la copie du mot de passe : ", err);
//         });
// }

btn.onclick = ()=>{
    createPassword();
}
