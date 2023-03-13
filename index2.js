const PI = 3.14159;

let radius;

let circumference;

// radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

circumference = 2 * PI * radius;

console.log("The circumference is equal to", circumference);

let x = Math.PI;

// x = Math.round(x);
console.log("x is", x);

// let a = window.prompt("a value");
// let b = window.prompt("b value");
// let c = Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
// console.log("c value is", c);

document.getElementById("submit").onclick = function(){
    let a = document.getElementById("aTextBox").value;
    let b = document.getElementById("bTextBox").value;
    let c = Math.sqrt(Math.pow(Number(a), 2) + Math.pow(Number(b), 2));
    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

let count = 0;

document.getElementById("increaseButton").onclick = function() {
    count += 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function() {
    count -= 1;
    document.getElementById("countLabel").innerHTML = count;
}

document.getElementById("resetButton").onclick = function() {
    count = 0;
    document.getElementById("countLabel").innerHTML = count;
}