// /*
// ASSIGNMENT RULES
// - All the answers must be in JavaScript
// - You can ask for tutor's help
// - The solution must be available for the tutors by the end of the day
// - You can Google / use StackOverflow BUT we suggest you to use just the material provided
// - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
// */
// /* EXERCISE 1
// Enumerate and describe the main datatypes in JavaScript. Try to explain concepts as you are speaking to a 12 years old
// */

// console.log ("JS DATA TYPES");
// console.log ("1. NUMBERS");
// console.log ("Numbers are one of the most common data types used all over the world. Javascript uses number too, precisely Arabic numbers (0-9).");
// console.log ("2. STRINGS");
// console.log ("In Javascript we refer to strings as a sequence of characters used to display text following the arabic alphabet (A-Z). Strings always nerd to go in between quotes.");
// console.log ("3. BOOLEANS");
// console.log (" Booleans refer to a condition created in Javascript with only two possible outcomes: True and False");
// console.log ("4. UNDEFINED/NULL");
// console.log ("This data type was introduced to give an answer when there is no value or no result");

// /* EXERCISE 2
// Describe what is a variable. Try to explain the concept as you are speaking to a 12 years old
// */

// console.log ("WHAT IS A VARIABLE");
// console.log ("A variable in Javascript is basically a name or number we can decide to then associate a value. In this way the terminal can associate the name we decide to the value we decide.");

// /* EXERCISE 3
// Write the code to execute a SUM between the number 12 and 20.
// */

// console.log ("total:" + (12+20) );

// /* EXERCISE 4
// Create a variable named x containing the number 12.
// */

// var x = 12;
// console.log ("variable:" + x);

// /* EXERCISE 5
// Create a variable named name containing the string John Doe.
// */

// let name = "John doe";
// console.log ("username:" + name);

// /* EXERCISE 6
// Execute a SUBTRACTION between the number 12 and the variable x, which stores the value 12.
// */

// console.log ("total:" + (12 - x));

// /* EXERCISE 7
// Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
// Verify that name1 is different from name2.
// Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
// */

// var name1 = "john".toLowerCase();
// var name2 = "John";
// if (name1 !== name2) {
// console.log ("The names are different")
// }
// else { (name1 === name2 .toLowerCase())
// console.log ("the names are equal")
// }

// /* EXERCISE 8
// Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
// */

// var  x = 7
// if (x === 1) {
//     console.log ("one")
// }
// else if  ( x === 2) {
//     console.log ("two")
// }
// else if  (x === 3) {
//     console.log ("three")
// }
// else if  ( x === 4) {
//     console.log ("four")
// }
// else if (x === 5) {
//     console.log ("five")
// }
// else if  ( x === 6) {
//     console.log ("six")
// } else if  (x === 7) {
//     console.log ("seven")
// }
// else if  ( x === 8) {
//     console.log ("eight")
// } else if  (x === 9) {
//     console.log ("nine")
// }

// /* EXERCISE 9
// [Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
// */

// let price = 42
// let discount = price > 20 ? 10 : 0
// console.log ("Discounted price:" + (price - discount))

// /* WHEN YOU ARE FINISHED
// Upload the .js file on Eduflow before 17.00 GMT +1. In the next days we'll also learn how to use GIT
// */

str = "lullaby";
var lastLetter = str.charAt(str.length - 1);
console.log(lastLetter);

function whatever(verb, noun, adjective) {
  result = verb + "" + noun + adjective + "";
}

console.log(whatever("do", "dog", "good"));
