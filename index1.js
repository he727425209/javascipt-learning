console.log("what's up");
// window.alert("hello world");

let age = 21;
let firstName = "kevin";
let student = false;

console.log("You are", age, "old");
console.log("hello ", firstName);
console.log(student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;

let students = 15;

students = students / 2;

console.log(students);

// let userName = window.prompt("please enter your name");
let userName;
document.getElementById("myButton").onclick = function(){
    userName = document.getElementById("myText").value;
    console.log("hello", userName);
    document.getElementById("myLabel").innerHTML = userName;
}

// console.log("hello", userName);

let age1 = window.prompt("how old are you?");

console.log(typeof age1);
age1 = Number(age1);
console.log(typeof age1);

age1 += 1;

console.log("Hello you are", age1, "years old");