const loadingText = document.getElementById("loading");
const userDiv = document.getElementById("user");

loadingText.innerText = "Loading data...";

fetch("https://randomuser.me/api/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        return response.json();
    })
    .then(data => {
        loadingText.innerText = "";

        const user = data.results[0];
        const name = `${user.name.first} ${user.name.last}`;
        const email = user.email;

        // Display data using DOM
        userDiv.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Save value in localStorage
        localStorage.setItem("userName", JSON.stringify(name));
    })
    .catch(error => {
        loadingText.innerText = "";
        userDiv.innerText = "Error loading data";
        console.error(error);
    });

// Retrieve from localStorage
const savedName = JSON.parse(localStorage.getItem("userName"));
console.log("Saved User Name:", savedName);
