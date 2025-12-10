// BMI Calculator Function

function calculateBMI(weight, height) {
    const bmi = weight / (height * height)
    return bmi
}
console.log("BMI :", calculateBMI(70, 1.75))

// Greeting System
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet("Ragul"))


// Marks to Grade Converter
function grade(marks) {
    if (marks >= 90) return 'A'
    else if (marks >= 75) return 'B'
    else if (marks >= 60) return 'C'
    else if (marks >=40) return 'D'
    else return 'F'
}
console.log(grade(95))


// Array Processing with Callbacks

// foreach
const numbers = [1, 2, 3, 4]

numbers.forEach(function (num) {
  console.log("forEach:", num)
})

// map
const squares = numbers.map(function (num) {
  return num * num
})

console.log("Squares:", squares)

// Custom callback function
function processArray(arr, callback) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]))
  }
  return result
}

function double(num) {
  return num * 2
}

console.log("Doubled:", processArray(numbers, double))


// App Initialization using IIFE
(function () {
  console.log("App Started Successfully!")
})()