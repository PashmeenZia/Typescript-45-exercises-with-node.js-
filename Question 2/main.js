//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Pashmeen Zia";
// In lowercase
console.log(personName.toLowerCase());
// In uppercase
console.log(personName.toUpperCase());
// titlecase
console.log(personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
