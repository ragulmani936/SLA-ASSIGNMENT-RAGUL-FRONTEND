// Write an if condition to check if a number is positive.

let num = 10

if (num %2 == 0){ 
    console.log("Positive")
} 


// Use else-if to print grades (A, B, C, Fail).

let mark = 97
let grade

if (mark >= 90) {
    grade = "A"
} else if(mark >= 75) {
    grade = "B"
} else if(mark >= 40) {
    grade = "C"
} else {
    grade = "Fail"
}
console.log("Grade :", grade)

// Create a for loop to print 1–10.

for (i = 1; i<=10; i++) {
    console.log(i)
}

// Use while to print even numbers up to 20.

let num1 = 2
while(num1 <= 20) {
    console.log(num1)
    num1 += 2
}

// Use for…in to print object keys & values.
let student = {
    Name : "Ragul",
    age : 22,
    course : "AI-DS"
}
for (let key in student) {
    console.log(key + ":" + student[key])
}