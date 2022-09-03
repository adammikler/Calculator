let num = 0;
let num2 = 0;

let currentNum = num;

let oporator = "";

let text = "";


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

function updateCurrent(currentNum) {
    if (currentNum == num) {
        currentNum = num2;
    } else {
        currentNum = num;
    }
}

document.getElementById("0").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "0";
    updateCurrent(currentNum);
    num = 0;
});

document.getElementById("1").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "1";
    updateCurrent(currentNum);
    num = 1;
});

document.getElementById("2").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "2";
    updateCurrent(currentNum);
    num = 2;
});

document.getElementById("3").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "3";
    updateCurrent(currentNum);
    num = 3;
});

document.getElementById("4").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "4";
    updateCurrent(currentNum);
    num = 4;
});

document.getElementById("5").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "5";
    updateCurrent(currentNum);
    num = 5;
});

document.getElementById("6").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "6";
    updateCurrent(currentNum);
    num = 6;
});

document.getElementById("7").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "7";
    updateCurrent(currentNum);
    num = 7;
});

document.getElementById("8").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "8";
    updateCurrent(currentNum);
    num = 8;
});

document.getElementById("9").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "9";
    updateCurrent(currentNum);
    num = 9;
});



document.getElementById("mult").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "X";
    oporator = "multiply";
});

document.getElementById("divi").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "÷";
    oporator = "divide";
});

document.getElementById("sub").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "-";
    oporator = "subtract"
});

document.getElementById("add").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "+";
   oporator = "add"
});

document.getElementById("AC").addEventListener("click", function () {
    document.getElementById("display").innerHTML = "";
    num = 0;
    num2 = 0;
});

document.getElementById("equ").addEventListener("click", function () {
    if (oporator == "subtract") {
        document.getElementById("display").innerHTML = subtract(num, num2);
    } else if (oporator == "add") {
        document.getElementById("display").innerHTML = add(num, num2);
    } else if (oporator == "divide") {
        document.getElementById("display").innerHTML = divide(num, num2);
    } else if (oporator == "multiply"){
        document.getElementById("display").innerHTML = mult(num, num2);
    }
    console.log(num2)
    num = 0;
    num2 = 0;
});