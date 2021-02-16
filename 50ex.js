// EX 21

// let x = "John";
// let y = "Doe";

// console.log(x + " <> " + y);

//EX 22
// let user = {
//   name: "Lollo",
//   surname: "Porco",
//   email: "Lolloporco@porcolollo",
// };

// function PorcoDio() {
//   return user;
// }

// function PorcoCazzo() { //OBJECT INSIDE THE FUNCTION, CANNOT BE USED OUTSIDE
//     let user = {
//       name: "Lollo",
//       surname: "Porco",
//       email: "Lolloporco@porcolollo",
//     };
//     return user;
//   }
//   console.log(PorcoCazzo());

//EX 23
// delete user.surname;
// console.log(PorcoDio());

//EX 24
function createArray() {
  let slaves = ["uno", "due", "tre", "quattro", "cinque", "sei"];

  for (i = 0; i < slaves.lenght; i++) {
    console.log(slaves[i]);
  }
  return slaves;
}
console.log(createArray());

//EX 25

for (i = 0; i < slaves.lenght; i++) {
  console.log(slaves[i]);
}
