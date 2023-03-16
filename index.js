let x;
let y;
let z;

document.getElementById("rollButton").onclick = function() {
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;

    document.getElementById("xlabel").innerHTML = x;
    document.getElementById("ylabel").innerHTML = y;
    document.getElementById("zlabel").innerHTML = z;
}

let age = -21;

if (age >= 18) {
    console.log("Your age is greater than 18");
} else if (age < 0) {
    console.log("You are not born yet");
} 
else {
    console.log("You are not an adult");
}