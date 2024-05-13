"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
Object.defineProperty(exports, "__esModule", { value: true });
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
//Part 1:
let guestArr = ["Ali", "Haseeb", "Wajahat", "Hamza"];
let canNotAttend = "Ali";
let newGuest = "Wajahat";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
//guestArr.map((items) => 
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more peoples.`)
// ); 
//Part 2: Began
let guestBeg = "Umaima";
guestArr.unshift(guestBeg);
//Part 3: Middle
let middleGuest = "Fatima";
let middleIndex = guestArr.length / 3;
guestArr.splice(middleIndex, 0, middleGuest);
console.log(guestArr);
//Part 4: Append
guestArr.push("Fatima");
console.log(guestArr);
//Part 5: Invitation
guestArr.map((items) => console.log(`Dear ${items}, you are invited in the more people list on dinner`));
