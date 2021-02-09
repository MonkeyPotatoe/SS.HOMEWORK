/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[ 1 , 3, 5] ==> [5 , 3, 1]
*/

let numbers = [1,2,3,4]
numbers.reverse()
console.log(numbers)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

console.log(Math.max(...numbers))

/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

console.log(Math.min(...numbers))

/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

const arrayOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], //---------- VERY HARD
evenNumbers = []; 

for (let i = 0; i < arrayOfNumbers.length; ++i) { 
if (arrayOfNumbers[i] % 2 === 0) {
    evenNumbers.push(arrayOfNumbers[i]);
}
}
console.log(evenNumbers)

/* EXERCISE 5
Write the code to delete even entries from an array.
*/

for (let i = 0; i < arrayOfNumbers.length; ++i) { 
    if (arrayOfNumbers[i] % 2 === 0) {
        delete evenNumbers(arrayOfNumbers[i]);
    } else 
    }



/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/



/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/



/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: [ "strive", "is", "good"] => [ 5 , 2, 4]
*/

let Arrayofstrings = ["strive","is","good"]
console.log(Arrayofstrings[0].length, [1].length, [2].length)
