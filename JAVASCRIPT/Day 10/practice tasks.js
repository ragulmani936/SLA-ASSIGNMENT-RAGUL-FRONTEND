// 1.Identify scope in given code
let x = 10  // Global scope

function demo() {
    let y = 20     // function scope
    if (true) {
        let z = 30  // Block scope
        console.log(x,y,z)
    }
}
demo()


// 2. Create a Simple Closure

function outer() {
    let count = 0

    return function inner() {
        count++
        console.log(count)
    }
}
let counter = outer()
counter()
counter()
counter()

// 3. Write a callback using setTimeout
setTimeout(function () {
    console.log("Executed after 2 seconds")
}, 2000)


// 4. Create a Promise that Resolves

let myPromise = new Promise((resolve, reject) => {
    let sucess = true

    if (sucess) {
        resolve("Promise resolved sucessfully")
    } else {
        reject("Promise failed")
    }
})

myPromise.then(result => console.log(result))


// 5. Convert promise to async/await
// promise 

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Data received"), 1000)
    })
}
getData().then(data => console.log(data))

// async/await

async function fetchData() {
    let data = await getData()
    console.log(data)
}
fetchData()