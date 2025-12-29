// 1.Validate number input using try/catch

let number = prompt("Enter a Number:")

try {
    if (number === "" | isNaN(input)) {
        throw "Invalid number input"
    }
    console.log("Valid Number :",Number(input))
}
catch (error) {
    console.log("Error:", error)
}

// 2. Custom error for empty form fields
let userName = ""

try {
    if (userName.trim() === "") {
        throw "Username Cannot be empty"
    }
    console.log("username:", userName)
}
catch (error) {
    comsole.log("Error :", error)
}


// 3. alculator error handling
let a = 10
let b = 0

try {
    if (b === 0) {
        throw "Cannot be divided by zero"
    }
    console.log("Result:", a / b)
}
catch (error) {
    console.log("Error:", error)
}


// 4. Login form validation

let correctPassword = "ragelin1631"
let currentPassword = ""

try {
    if (currentPassword === "") {
        throw "Password cannot be empty"
    }
    if (currentPassword != correctPassword) {
        throw "Invalid Password"
    }
    console.log("Login Sucessfully!!!")
}
catch (error){
    console.log("Login Failed:", error)
}

// 5. Debug logical errors in sample code

// Incorrect code
let length = 10
let width = 4

let area = width + length
console.log(area)

// Corrected code
let x = 10
let y = 4

let z = x * y
console.log(z)