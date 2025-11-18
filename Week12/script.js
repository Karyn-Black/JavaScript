// try {
//     console.log(unknownVariable);
//     console.log("Everything is fine.");
// } catch (error) {
//     console.log("Error details:" ,error.message);
// }

const adviceBtn = document.getElementById('advice-button');
const catBtn = document.getElementById('cat-button');
const output = document.getElementById('output');

// Fetch and display advice from the Advice Slip API
adviceBtn.addEventListener("click", async() => {
    const url = "https://api.adviceslip.com/advice";

    output.textContent = "Fetching advice for you...";

    try {
        // Fetch is sending get request to the url
        const response = await fetch(url);

        const data = await response.json();

        const adviceText = data.slip.advice;

        output.textContent = `${adviceText}`;

    } catch (error){
        output.textContent = `An error occurred: ${error.message}`;
    };
    
    // Await
});

