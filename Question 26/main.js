"use strict";
//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
Object.defineProperty(exports, "__esModule", { value: true });
// Version 3
let alienColor = "green";
// using if and else if statement
if (alienColor === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColor === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor === "red") {
    console.log("you shot down red alien you have earned 15 points");
}
// Version 2
let alienColor2 = "yellow";
if (alienColor2 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColor2 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor2 = "red") {
    console.log("you shot down red alien you have earned 15 points");
}
// Version 3
let alienColor3 = "red";
if (alienColor3 === "green") {
    console.log("you shot down green alien you have earned 5 points");
}
else if (alienColor3 === "yellow") {
    console.log("you shot down yellow alien you have earned 10 points");
}
else if (alienColor3 = "red") {
    console.log("you shot down red alien you have earned 15 points");
}
