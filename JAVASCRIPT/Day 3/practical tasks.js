// Age Category Program
let age = 16

if (age < 13) {
    console.log("Child")
} else if(age < 20) {
    console.log("Teen")
} else if(age < 60) {
    console.log("Adult")
} else {
    console.log("Senior")
}

// Multiplication Table Generator

let num = 5

for (i = 1; i<= 10; i++) {
    console.log(num + "x" + i + "=" + (num * i))
}


// Login Attempt System
 let oldPassword = "ragelin1631"
 let newPassword 

 do {
     newPassword = prompt("Enter a Password: ")
 } while (newPassword !== oldPassword)
 alert("Login Sucessfully!!!")


// Student Marksheet

let marks = 97
let grade, remark

if (marks >= 90) {
    grade = "A"
    remark = "Excellent"
} else if(marks >= 75) {
    grade = "B"
    remark = "Very Good"
} else if(marks >= 60) {
    grade = "C"
    remark = "Good"
} else if(marks >= 40) {
    grade = "D"
    remark = "Pass"
} else {
    grade = "F"
    remark = "Fail"
}

console.log("Grade :", grade)
console.log("Remark :", remark)

// Shopping Cart Total Calculator
let price = [299, 300, 400, 255, 500]
let Total = 0

for (let i = 0; i < price.length; i++) {
    Total += price[i]
}
console.log("Total Price :", Total)