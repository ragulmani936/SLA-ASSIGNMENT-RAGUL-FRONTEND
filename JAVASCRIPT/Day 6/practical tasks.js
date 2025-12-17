// Use reduce() to find the total of numbers [10, 20, 30, 40].

const numbers = [10, 20, 30, 40]
const total = numbers.reduce((sum, num) => sum + num, 0)
console.log("Total:", total)

// Create an array of students’ ages and find only adults (≥18).

const ages = [12, 18, 20, 22, 21, 10]
const adult = ages.filter(age => age >= 18)
console.log("Adults :", adult)

// Build a 2D array of names and marks — print each student's data.

student = [
    ["Ragul", 90],
    ["Evangelin", 90],
    ["Ragelin", 95]
]

student.forEach(student => {
    console.log("Name :", student[0], "Marks :", student[1])
})


// Combine two arrays using concat() or spread syntax [...a, ...b].

const a = [1,2,3,4,5]
const b = [10, 20, 30, 40, 50]

const combine = a.concat(b)
console.log(combine)

const combine1 = [...a, ...b]
console.log(combine1)

// Create an array of products and display all names dynamically using forEach() in HTML.

const product = ["Laptop", "Mobile", "Headphones", "Keyboard"]

const list = document.getElementById("productlist")

product.forEach(product => {
    const li = document.createElement("li")
    li.textContent = product
    list.appendChild(li)
})