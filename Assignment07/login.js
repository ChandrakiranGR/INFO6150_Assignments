$(document).ready(() => {
    const validateForm = () => {
        let valid = true;
        const email = $('#email').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const confirmPassword = $('#confirmPassword').val();

        if (!email || !/^[\w._%+-]+@northeastern\.edu$/.test(email)) {
            $('#emailError').text("Please enter a valid Northeastern email.");
            valid = false;
        } else {
            $('#emailError').text("");
        }
        if (!username || /[^a-zA-Z0-9]/.test(username)) {
            $('#usernameError').text("Username should be alphanumeric.");
            valid = false;
        } else {
            $('#usernameError').text("");
        }
        if (!password || password.length < 8 || password.length > 16) {
            $('#passwordError').text("Password should be 8-16 characters.");
            valid = false;
        } else {
            $('#passwordError').text("");
        }
        if (confirmPassword !== password) {
            $('#confirmPasswordError').text("Passwords do not match.");
            valid = false;
        } else {
            $('#confirmPasswordError').text("");
        }

        $('#loginBtn').prop('disabled', !valid);
        return valid;
    };

    $('#email, #username, #password, #confirmPassword').on('input', validateForm);

    $('#loginBtn').click(() => {
        if (validateForm()) {
            sessionStorage.setItem("username", $('#username').val());
            window.location.href = 'calculator.html';
        }
    });
});
