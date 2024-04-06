document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let identification = document.getElementById('id').value;
    let license_num = document.getElementById('licensenum').value;
    let DateBirth = document.getElementById('dob').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Get the uploaded files
    let cv = document.getElementById('cv').files[0];
    let certificates = document.getElementById('certificates').files[0];

    console.log('Form submitted with values:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('ID Number:', identification);
    console.log('Farmer License number:', license_num);
    console.log('Date of Birth:', DateBirth);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('CV:', cv);
    console.log('Certificates:', certificates);
});
