//       *1. Basic Variables and Data Types*

let name = "John";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);


//      *2. Conditions*

let num = 7; // Change the number to test
if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}


//       *3. Loops*


for (let i = 1; i <= 5; i++) {
    console.log(i);
}


//      *4. Functions*

function addNumbers(a, b) {
    return a + b;
}
  let result = addNumbers(3, 7);
  console.log(result);


//       *5. Arrays*

let fruits = ["apple", "banana", "cherry"];
fruits.push("orange");
console.log(fruits[0]); // First fruit
console.log(fruits.length); // Total number of fruits


//     **6. Array Methods: forEach**

let numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => {
  console.log(num * 2);
});




//      *7. DOM Manipulation*

document.getElementById("changeText").addEventListener("click", function () {
    document.querySelector("#container h1").textContent = "You clicked the button!";
});




//     *8. String Manipulation*

let text = "hello world";
console.log(text.toUpperCase());




//     *9. Objects*

let person = {
    name: "Alice",
    age: 30,
    greet: function () {
      return `Hello, my name is ${this.name}.`;
    },
  };
console.log(person.greet());

