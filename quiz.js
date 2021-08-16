const quizForm = document.querySelector(".quiz-form");
const submitAnswerButton =  document.querySelector("#submit-answers-btn");
const outputE1 = document.querySelector("#output");

const correctAnswers = ["Yes", "Isosceles", "No", "Yes", "Yes"];

function calculateScore(){
    let score=0;
    let index=0;

    const formResults = new FormData(quizForm);
    
    for( let value of formResults.values()){
        if( value === correctAnswers[index]){
            score = score + 1;
        }
        index = index + 1;
    }
   console.log(score) ;
   outputE1.innerText = "Your score is " +score;
}

submitAnswerButton.addEventListener("click", calculateScore);