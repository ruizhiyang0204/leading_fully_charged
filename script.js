// Simulated user database
const users = {};

// Handle registration
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users[username]) {
        document.getElementById('message').textContent = 'Username already exists!';
        document.getElementById('message').style.color = 'red';
    } else {
        users[username] = password;
        document.getElementById('message').textContent = 'Registration successful! Please log in.';
        document.getElementById('message').style.color = 'green';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }
});

// Handle login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (users[username] && users[username] === password) {
        document.getElementById('message').textContent = 'Login successful! Welcome, ' + username + '!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').textContent = 'Invalid username or password!';
        document.getElementById('message').style.color = 'red';
    }
});