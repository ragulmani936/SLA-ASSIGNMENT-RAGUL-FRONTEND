// Age Checker
let age = 20

 if (age <=18) {
     console.log("Child")
 } else if(age <=18 && age < 60) {
     console.log("Adult")
 } else {
     console.log("Senior")
 }


// // Simple Calculator
 let a = 20
 let b = 5

 console.log("Add", a + b)
 console.log("Suntract", a - b)
 console.log("Multiply", a * b)
 console.log("Divide", a / b)

// // Login Logic

 let userName = "Ragul"
 let password = "1631"

 if (userName === "Ragul" && password === "1631") {
     console.log("Welcome")
 } else {
     console.log("Invalid Login")
 }

// // Day Finder with Switch

let day = 4

switch(day) {
    case 1: console.log("Monday")
    break;
    case 2: console.log("Tuesday")
    break;
    case 3: console.log("Wednesday")
    break;
    case 4: console.log("Thursday")
    break;
    case 5: console.log("Friday")
    break;
    case 6: console.log("Saturday")
    break;
    case 7: console.log("Sunday")
    break;
    default:
        console.log("Invalid Number")
    break;
}

// Student Grading System

let marks = 90

if (marks >= 90) {
    console.log("Grade A")
} else if(marks >=80) {
    console.log("Grade B")
} else if(marks >= 70) {
    console.log("Grade C")
} else if(marks >= 60) {
    console.log("Grade D")
} else {
    console.log("Grader F")
}