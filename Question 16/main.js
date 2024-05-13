"use strict";
//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
Object.defineProperty(exports, "__esModule", { value: true });
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
//Initial list of guests:
let guests = ["Ali", "Bilal", "Hamza", "Izhaan", "Haseeb"];
//Information that only two people can be invited:
console.log("Due to limited space,only two people can be invited for dinner.");
//Removing guests until two names remain
while (guests.length > 2) {
    const removedGuest = guests.pop(); //Remove the last guest from the list
    console.log(`Sorry, ${removedGuest}, you are no longer invited to dinner.`);
}
//Sending a invitaions to the last two guest on the list
console.log("Invitations to the last 2 Guests");
//Printing invitations to the remaining two guests
guests.forEach((lasttwo) => {
    console.log(`Dear ${lasttwo}, you are still invited to dinner.`);
});
//Removing the last two names from the list
guests.pop();
guests.pop();
//Printing the final list to confirm it's empty
console.log("Final guest list:", guests);
