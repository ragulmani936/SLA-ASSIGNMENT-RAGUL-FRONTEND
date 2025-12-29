/* 1.Define an error in JavaScript
An error in JavaScript is a problem that occurs during the execution of a program and prevents it from running correctly.*/

/* 2. Types of JavaScript Errors 
 --> Syntax Error:
  if (x == 5 { 
  console.log("Hello");
}
-->Runtime Error:
 console.log(a)

 --> Logical Error:
 let sum = 10 - 5; 
*/

/* 3.Difference Between Runtime Error and Logical Error
--> Runtime Error:
     1.Occurs during execution
     2.Program stops
     3.Easy to detect
     4.Example: undefined variable

--> Logical Error:
  1.Occurs due to wrong logic
  2.Program runs
  3.Hard to detect
  4.Example: wrong formula
 */

// 4. Explain try / catch / finally

try {
    // code that may cause error
} 
catch (error) {
    // runs if error occurs
} 
finally {
    // always runs
}

try {
  let x = y + 5;
}
catch (error) {
  console.log("Error occurred");
}
finally {
  console.log("Execution completed");
}

/* 5.What is the use of throw?

The throw statement is used to create a custom error manually.*/

// Example:
let age = 15;

if (age < 18) {
  throw "Not eligible to vote";
}