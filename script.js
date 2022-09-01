let num = 0;
let num2 = 0;

let text = "0";


function add(num, num2) {
    return num + num2;
}

function subtract(num, num2) {
    return num - num2;
}

function divide(num, num2) {
    return num / num2;
}

function mult(num, num2) {
    return num * num2;
}

function display(text) {
    document.querySelector(".display").innerText = text;
}

document.getElementsById("0").addEventListener("click", function () {
    document.querySelector(".display").value = "0";
});

