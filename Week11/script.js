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
    const country = document.getElementById('country').value();
    const termsChecked = document.getElementById('terms').value.checked();

    // Extract radio button values
    let gender='';
    const genderRadios = document.getElementsByName('gender');

    for(let radio of genderRadios){
        if(radio.checked){
            gender = radio.value;
            break;
        }
    };
}
);

// Validation of the form
if(!name || !email || !password){
    showMessage('Please fill out all of the required fields', 'error');
    return;
}

function showMessage(text, type){
    message.textContent = text;
    message.className = type;
}
