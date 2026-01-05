// 1. Counter Using Closure
function createCounter() {
    let count = 0

    return function() {
        count++
        console.log(count)
    }
}
const counter = createCounter()
counter()
counter()
counter()


// 2. Delayed Message App
function showMessage() {
    setTimeout(() => {
        console.log("Hello!, this message delayed 3 seconds")
    }, 3000)
}
showMessage()


// 3. Fake API Call Using Promise

function fakeApiCall() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data received")
        }, 2000)
    })
}

fakeApiCall()
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error))


// 4. Data fetch using async/await
async function fetchData() {
  try {
    const data = await fakeApiCall()
    console.log(data)
  } catch (error) {
    console.log("Error:", error)
  }
}

fetchData()


// 5. Login Simulation with Async Flow
function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful")
      } else {
        reject("Invalid credentials")
      }
    }, 1500)
  })
}

async function loginUser() {
  try {
    const result = await login("admin", "1234")
    console.log(result);
    console.log("Redirecting to dashboard...")
  } catch (error) {
    console.log("Login failed:", error)
  }
}

loginUser()