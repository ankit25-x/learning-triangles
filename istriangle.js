const inputs = document.querySelectorAll(".angle-input");

const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");


function isTriangle() {
    const sum = sumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if(sum === 180){
        outputE1.innerText="The angles form a triangle";
    }
    else{
        outputE1.innerText="Sorry! not a triangle";
        
    }
}

function sumOfAngles(angle1, angle2, angle3) {
    const sum = angle1 + angle2 + angle3;
    return sum;
}
isTriangleButton.addEventListener("click", isTriangle);