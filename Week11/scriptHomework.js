// DOM Access (selecting HTML elements)

console.log("Yes, it works");

// Selecting the form element
const form = document.getElementById("userForm");

// Selecting the message element
const message = document.getElementById("message");

// Listening to form submission
form.addEventListener("submit", function(event){
    // Prevents the form from resubmitting
    event.preventDefault();

    // Extract the input values from the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const country = document.getElementById('country').value;
    const termsChecked = document.getElementById('terms').checked;

    // Extract radio button values
    let gender='';
    const genderRadios = document.getElementsByName('gender');

    for(let radio of genderRadios){
        if(radio.checked){
            gender = radio.value;
            break;
        }
    };

    // Validation of the form
    if(!name || !email || !password){
        showMessage('Please fill out all of the required fields', 'error');
        return;
    }

    if(!termsChecked){
        showMessage('You must agree to the Terms and Conditions before submitting.', 'error');
        return;
    }

    // Create a JavaScript object to store the form data
    const userData = {
        name: name,
        email: email,
        password: password,
        age: age || 'Not Selected',
        country: country || 'Not Selected',
        termsAccepted: termsChecked,
    };

    // Convert this object to a JSON
    // The stringify() method converts a JavaScript object or value to a JSON string
    // null and 2 are optional parameters
    // null means no indentation - it means don't filter or transform properties; use default behavior
    // 2 means 2 spaces arguments
    const jsonData = JSON.stringify(userData, null, 2);
    message.className = 'success';
    message.textContent = `User Data: ${jsonData}`;

    // We want to downlad JSON data as a file
    // blob = Binary Large OBject
    // Create a blob object to hold the JSON data
    const blob = new Blob([jsonData], {type: 'application/json'});

    // Create a download link that is an anchor tag. It is used to download files
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'userData.json'; // Name of downloaded file

    // 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);

    setTimeout(() => form.reset(), 2000);
}
);

function showMessage(text, type){
    message.textContent = text;
    message.className = type;
}