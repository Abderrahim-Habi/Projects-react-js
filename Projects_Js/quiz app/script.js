const questions = [
    {
        question: "which is larget animal in the world?",
        answers:[
            {text: "Shark", correct:false},
            {text: "Blue whale", correct:true},
            {text: "Elephant", correct:false},
            {text: "Giraffe", correct:false},
        ]
    },
    {
        question: "which is smallest country in the world?",
        answers:[
            {text: "Vatican city", correct:true},
            {text: "Bhutan", correct:false},
            {text: "Nepal", correct:false},
            {text: "Shri Lanka", correct:false},
        ]
    },
    {
        question: "which is larget desert in the world?",
        answers:[
            {text: "Kalahari", correct:false},
            {text: "Gobi", correct:false},
            {text: "Sahara", correct:false},
            {text: "Antarctiva", correct:true},
        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers:[
            {text: "Asia", correct:false},
            {text: "AUstralia", correct:true},
            {text: "Arctic", correct:false},
            {text: "Africa", correct:false},
        ]
    }
];
const questionelement = document.getElementById("question");
const nextButton = document.getElementById("next-btn");
const answerButton = document.getElementById("answer-btn");

let currentQuestionIndex = 0;
let score=0;

function startQuiz(){
    currentQuestionIndex = 0;
    score=0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionno = currentQuestionIndex+1;
    questionelement.innerHTML= questionno + "." + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectanswers);
    })
}

function resetState(){
    nextButton.style.display="none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}
function selectanswers(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct==="true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }
    else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled="true";
    });
    nextButton.style.display="block";
}

nextButton.addEventListener("click",(event)=>{
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else if (nextButton.innerHTML === "play Again") {
        startQuiz();  // Redémarrer le quiz
    }
    else{
        questionelement.innerHTML = "You Scored:"+score;
        answerButton.innerHTML="";
        nextButton.innerHTML="play Again";
        // nextButton.addEventListener("click",(event)=>{
        //     //window.location.reload()

        // })
     }   
})
// nextButton.addEventListener("click", () => {
//     if (nextButton.innerHTML === "Play Again") {
//         startQuiz();  // Redémarrer le quiz
//     } else {
//         currentQuestionIndex++;
//         if (currentQuestionIndex < questions.length) {
//             showQuestion();
//         } else {
//             questionelement.innerHTML = "You Scored: " + score;
//             answerButton.innerHTML = "";
//             nextButton.innerHTML = "Play Again";
//             nextButton.style.display = "block";  // Afficher le bouton Play Again
//         }
//     }
// });


startQuiz();