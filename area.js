const inputBase = document.querySelector("#input-base");
const inputHeight = document.querySelector("#input-height");
const calculateAreaBtn = document.querySelector("#submit-button");

const outputEl = document.querySelector("#output");

function calculateProduct(a,b){
    const product = a*b;
    return product;
}


function calculateAreaOfTriangle(){
    console.log(Number(inputHeight.value));
    console.log(Number(inputBase.value));
const product = 0.5*(calculateProduct(Number(inputBase.value), Number(inputHeight.value)  ))

console.log(product);

outputEl.innerText = "The area is = " +product;

}


calculateAreaBtn.addEventListener("click", calculateAreaOfTriangle);