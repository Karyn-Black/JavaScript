// Accessing the DOM

const input = document.querySelector('#userInput');
const button = document.querySelector('#validateBtn');
const resultDiv = document.querySelector('#result');
const input2 = document.querySelector('#userInput2');
const button2 = document.querySelector('#validateBtn2');
const resultDiv2 = document.querySelector('#result2');

button.addEventListener('click', () =>
    {
        const userText = input.value;
        const regex = /^[A-Za-z]+$/;
        // ^ indicated the start of the sting
        // [A-Za-z] indicates any letter from A to Z or a to z
        // + indicates one or more occurrences of the preceding element
        // $ indicates the end of the string
        
        if(regex.test(userText)){
            resultDiv.textContent = "Valid Name";
            resultDiv.style.color = "green";
        }else{
            resultDiv.textContent = "Invalid Name (Only letters are allowed)";
            resultDiv.style.color = "red";
        }
    }
);

button2.addEventListener('click', () =>
    {
        const userText2 = input2.value;
        // const regex2 = /^\d{3}-\d{3}\d{4}$/;
        const regex2 = /^\d+$/;
        // ^ indicated the start of the sting
        // [A-Za-z] indicates any letter from A to Z or a to z
        // + indicates one or more occurrences of the preceding element
        // $ indicates the end of the string
        
        if(regex2.test(userText2)){
            resultDiv2.textContent = "Valid Number";
            resultDiv2.style.color = "green";
        }else{
            resultDiv2.textContent = "Invalid Number (Only numbers are allowed)";
            resultDiv2.style.color = "red";
        }
    }
);
