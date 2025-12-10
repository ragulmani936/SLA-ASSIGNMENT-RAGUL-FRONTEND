// Write a function that prints "Good Morning".

 function greet() {
     console.log("Good Morning")
 }
greet()

// Create a function that takes two numbers and returns their sum.\

function sum(a, b) {
    return a + b
}
console.log(sum(10, 5))



// Convert the function to an arrow function.

const add = (c, d) => c + d

console.log(add(10, 20))


// Write a callback function for setTimeout.

setTimeout(function() {
    console.log("callback executed!!")
},2000)


// Create an IIFE that prints "Started".
(function() {
  console.log("Started");
})();