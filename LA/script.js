// Create container
const container = document.createElement("div");
container.className = "container";

// Heading
const heading = document.createElement("h2");
heading.textContent = "Login Form";
container.appendChild(heading);

// Username label + input
const usernameLabel = document.createElement("label");
usernameLabel.setAttribute("for", "username");
usernameLabel.textContent = "Username:";
container.appendChild(usernameLabel);

const usernameInput = document.createElement("input");
usernameInput.type = "text";
usernameInput.id = "username";
container.appendChild(usernameInput);

// Password label + input
const passwordLabel = document.createElement("label");
passwordLabel.setAttribute("for", "password");
passwordLabel.textContent = "Password:";
container.appendChild(passwordLabel);

const passwordInput = document.createElement("input");
passwordInput.type = "password";
passwordInput.id = "password";
container.appendChild(passwordInput);

// Button
const submitBtn = document.createElement("button");
submitBtn.id = "submitBtn";
submitBtn.textContent = "Submit";
container.appendChild(submitBtn);

// Message paragraph
const message = document.createElement("p");
message.id = "message";
container.appendChild(message);

// Add container to body
document.body.appendChild(container);

// Button click handler
submitBtn.addEventListener("click", function () {
    if (passwordInput.value.length < 6) {
        passwordInput.style.border = "2px solid red";
        message.textContent = "Password must be at least 6 characters long.";
        message.style.color = "red";
    } else {
        passwordInput.style.border = "2px solid green";
        message.textContent = "Success!";
        message.style.color = "green";
    }
});
