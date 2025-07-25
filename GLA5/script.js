const baseURL = "https://jsonplaceholder.typicode.com";

// 1. GET all users
async function fetchUsers() {
    const response = await fetch(`${baseURL}/users`);
    const users = await response.json();
    displayUsers(users);
}

fetchUsers(); // call the function

// 2. Display user data
function displayUsers(users) {
    const container = document.getElementById('userContainer');
    container.innerHTML = '';
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user-card');
        div.innerHTML = `
        <strong>Name:</strong> ${user.name}<br>
        <strong>Email:</strong> ${user.email}<br>
        <strong>City:</strong> ${user.address.city}<br>
        <strong>Company:</strong> ${user.company.name}
    `;
        container.appendChild(div);
    });
}

async function deleteUser() {
    const id = 10;
    const response = await fetch(`${baseURL}/users/${id}`, {
        method: 'DELETE',
    });

    if (response.status === 200 || response.status === 204) {
        console.log(`User ${id} successfully deleted!`);
    } else {
        console.error(`Failed to delete user ${id}. Status: ${response.status}`);
    }
}

deleteUser();