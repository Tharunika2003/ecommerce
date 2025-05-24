function login() {
    // Get values from the login form
    const loginUsername = document.getElementById('loginUsername').value;
    const loginEmail = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Check if the email has the "gmail.com" domain
    if (!loginEmail.endsWith('@gmail.com')) {
        alert('Invalid email domain. Please enter a Gmail address.');
        return;
    }

    // Retrieve registration data from local storage
    const storedUserData = localStorage.getItem('userData');

    // Check if registration data exists
    if (storedUserData) {
        const userData = JSON.parse(storedUserData);

        // Check if login credentials match the stored registration data
        const emailIndex = userData.emails.indexOf(loginEmail);
        if (loginUsername === userData.username && emailIndex !== -1 && loginPassword === userData.pass) {
            alert('Login successful!');
            window.open("./home.html"); // Display success message
        } else {
            alert('Invalid login credentials. Please try again.');
        }
    } else {
        alert('No registration data found. Please register first.');
    }
}





