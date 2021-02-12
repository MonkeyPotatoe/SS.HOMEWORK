// let x = "John";
// let y = "Doe";
// function veryweird(x, y) {}
// consolelog(veryweird);

let user = {
  name: "Sergio",
  surname: "Serjei",
  email: "Sergio@serjei.com",
};
console.log(user);

delete user.email;
console.log(user);

let strArray = [
  "hey",
  "how",
  "are",
  "you",
  "hey",
  "how",
  "are",
  "you",
  "hey",
  "how",
  "are",
  "you",
  "hey",
  "how",
  "are",
  "you",
];
console.log(strArray);

let randomNumbers = [];
for (let i = 1; i <= 100; i++) {
  randomNumbers.push(i);
  console.log(randomNumbers);
}

function minimum() {
  Math.max(...randomNumbers);
  Math.max(...randomNumbers);
}
console.log(minimum);

let newRandomArray = [[], [], [], []];
for (let i = 0; i <= 100; i++) {}
console.log(newRandomArray);

function longestArray() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2];
  if (arr1.length() > arr2.length()) {
    return arr1;
  } else return arr2;
}
longestArray();
