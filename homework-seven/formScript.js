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

    // If all of the validation passed, show a success message
    // Template literal (``) allows us to write multi-line strings with embedded expressions like ${js_var}
    showMessage(`Hello ${name}! Your inputted email was ${email} and your password was ${password} and your age was ${age}. 
        You have submitted the form successfully`, 'success');
    
    // To give a clean interface after submission, we clear all the input fields
    // setTimeout() delays the form reset by 1.5 seconds
    // So that the user can first see the message
    setTimeout(() => form.reset(), 1500);
}
);

function showMessage(text, type){
    message.textContent = text;
    message.className = type;
}
