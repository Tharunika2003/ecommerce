function register() {
    // Get values from the form
    const firstname = document.getElementById('fname').value;
    const lastname = document.getElementById('lname').value;
    const username = document.getElementById('username1').value;
    const email = document.getElementById('mail1').value;
    const pass = document.getElementById('pass1').value;
    const cpass = document.getElementById('cpass1').value;

    // Check if the email ends with "@gmail.com"
    if (!email.endsWith('@gmail.com')) {
        alert('Invalid email domain. Please enter a Gmail address.');
        return;
    }

    // Check if any of the fields are empty
    if (firstname === "" || lastname === "" || username === "" || email === "" || pass === "" || cpass === "" || pass !== cpass) {
        alert("Invalid credentials, please fill the form correctly.");
    } else {
        // Create an object to store registration data
        const userData = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            pass: pass,
            cpass: cpass,
        };

        // Convert the object to a JSON string and store it in local storage
        localStorage.setItem('userData', JSON.stringify(userData));

        alert("Successfully registered, redirecting to login.");
        window.open("./Login.html");
    }
}

