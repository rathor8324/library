document.addEventListener('DOMContentLoaded', function () {
    // Add event listener for admin login form
    document.getElementById('adminLoginForm').addEventListener('submit', adminLogin);
});

function adminLogin(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (add more robust validation as needed)
    if (!username || !password) {
        alert('Username and password are required');
        return;
    }

    // Check admin credentials (replace with actual authentication logic)
    if (username === 'prabhat001' && password === '1234') {
        alert('Login successful! Redirecting to the dashboard.');
        // Redirect to the admin dashboard (index.html)
        window.location.href = 'index.html';
    } else {
        alert('Incorrect username or password. Please try again.\nUsername: prabhat001\nPassword: 1234');
    }
}
