document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get form input values
        const name = document.getElementById('enter-name').value.trim();
        const email = document.getElementById('enter-email').value.trim();
        const password = document.getElementById('enter-pw').value.trim();
        const confirmPassword = document.getElementById('confirm-pw').value.trim();
        const checkbox = document.getElementById('terms-of-service').checked;

        // Perform validation
        if (name === '') {
            alert('Please enter your name.');
            return;
        }

        if (email === '') {
            alert('Please enter your email.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (password === '') {
            alert('Please enter your password.');
            return;
        }

        if (confirmPassword === '') {
            alert('Please confirm your password.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!checkbox) {
            alert('Please agree to the Terms of Service.');
            return;
        }

        // If all validations pass, redirect to signin-home.html
        window.location.href = '../html files/home-logged-in.html';
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
