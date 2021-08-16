const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#submit-button");

const outputEl = document.querySelector("#output");



function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    
    return sumOfSquares;

}

function calculateHypotenuse(){
    
const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));

console.log(sumOfSquares);
console.log(Number(sides[0].value));
console.log(Number(sides[1].value));

const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
console.log(lengthOfHypotenuse);

outputEl.innerText = "The hypotenuse is = " +lengthOfHypotenuse; 
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

