// Create a class Product with name and price, and a method discountedPrice()

class product  {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    discountedPrice(discountedPercent) {
        return this.price - (this.price * discountedPercent / 100)
    }
}

const product1 = new product("Laptop", 80000)
console.log("Discounted Price: ", product1.discountedPrice(10))


// Build an object user with login and logout methods.
const user = {
    userName :"Ragul",

    login() {
        console.log(this.userName + " loged in")
    },
    logedOut() {
        console.log(this.userName + " loged Out")
    }
};

user.login()
user.logedOut()


// Create a class Student with constructor and display() method — make 3 students.

class Student {
    constructor(name, rollNo, department) {
        this.name = name
        this.rollNo = rollNo
        this.department = department
    }

    display() {
        console.log(`Name : ${this.name}, Roll No: ${this.rollNo}, Department : ${this.department}`)
    }
}

const student1 = new Student("Ragul", 212221230080, "AIDS")
const student2 = new Student("Evangelin", 212221230025, "AIDS")
const student3 = new Student("Ragelin", 212221230081, "AIDS")

student1.display()
student2.display()
student3.display()


// Create a base class Shape and a subclass Circle that calculates area.

class shape {
    area() {
        return 0
    }
}
class Circle extends shape {
    constructor(radius) {
        super();
        this.radius = radius
    }
    area() {
        return Math.PI * this.radius * this.radius 
    }
}
const circle = new Circle(7)
console.log("Circle Area :", circle.area())

// Use prototypes to add a new method to all Student objects dynamically.

Student.prototype.getDetails = function() {
    return `${this.name} belongs to ${this.department}`
};

console.log(student1.getDetails())
console.log(student2.getDetails())
console.log(student3.getDetails())