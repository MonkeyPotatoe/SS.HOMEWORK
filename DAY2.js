/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can ask for tutor's help
- The solution must be available for the tutors by the end of the day
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/


/* EXERCISE 1
Create and array containing the first 5 positive numbers.
*/

// let ListOfNumbers = [1,2,3,4,5]
// console.log (ListOfNumbers)


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

// let user =  {
// name: "Enrico", 
// surname: "Bonadiman",
// email: "enrico.bonadiman.sk@gmail.com",
// age: 25,
// hasdrivinglicense: true,
// }
// console.log (user)

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/


/* EXERCISE 4
Remove from the previously created object the age property.
*/

// delete user.age
// console.log(user)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/

// const user2 = Object.assign({}, user)
// user2.name = "yo"
// user2.surname = "estoy"
// user2.age = 40
// user2.email = "loco"
// console.log(user2)

// if (user.email !== user2.email) {
// console.log ("emails are not matching")
// }
// else {
//  console.log ("emails are matching")   
// }



/* EXERCISE 6
You are working for a eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50, they are eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculate totalCost based on this assumption.
*/
// 
// let totalshoppingcart = 500
// let price 
// if (totalshoppingcart>50) {
// price=totalshoppingcart-10     
// }
// else {
// price= totalshoppingcart+10
// }
// console.log(price)





/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

// let totalshoppingcart = 500
// let price 
// if (totalshoppingcart>50) {
// price=totalshoppingcart-10     
// }
// else {
// price= totalshoppingcart+10
// }
// let discountedprice = price - (totalshoppingcart*20/100)
// console.log(discountedprice)


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car =  {
brand: "ford",
model: "focus",
Licenseplate: "3ATYSS"
}
let car2 = Object.assign ({}, car)
car2.brand = "nissan"
car2.model = "gt-r"
car2.licenseplate = "H377OL"
let car3 = Object.assign ({}, car)
car3.brand = "wolksvagen"
car3.model = "golf"
car3.licenseplate = "H399OP"
let car4 = Object.assign ({}, car)
car4.brand = "fiat"
car4.model = "punto"
car4.licenseplate = "FT67OL"
let car5 = Object.assign ({},car)
car5.brand = "dacia"
car5.model = "camster"
car5.licenseplate = "XXX7895"

console.log (car, car2, car3, car4, car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

const carforrent = [car,car2,car3,car4,car5]
console.log (carforrent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

// delete carforrent[0,4]
// console.log (carforrent)


/* EXERCISE 11
Print in the console the TYPES of a car, of the licensePlate and of the brand properties.
*/

console.log (carforrent.model, carforrent.brand, carforrent.licenseplate)


/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code via Discord to the tutor! In the next days we'll also learn how to use GIT
*/