document.getElementById('mainForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value.trim();
    let lastName = document.getElementById('lastName').value.trim();

    if (!validateName(firstName)) {
        alert('Please enter a valid first name.');
        return;
    }

    if (!validateName(lastName)) {
        alert('Please enter a valid last name.');
        return;
    }

    // Continue with form submission
    // Your code here
});

function validateName(name) {
    return /^[A-Za-z]+$/.test(name);
}
