// Define the Variables
// let formulaPrinciple = 1;
let formulaRate = 0.01;
let formulaRateNew = formulaRate / 100;
let formulaTime = 10;

// Form Inputs
let formulaPrinciple = document.getElementById("inputPrinciple");
formulaPrinciple.textContent = 1;

// Calculations for Paragraph
let formulaTotalOwed = formulaPrinciple * (1+formulaRateNew*formulaTime);
formulaTotalOwed = formulaTotalOwed.toFixed(2);
let formulaTotalInterest;
formulaTotalInterest = formulaTotalOwed - formulaPrinciple;
formulaTotalInterest = formulaTotalInterest.toFixed(2);


// function calculate() {
//     let textInput = parseFloat(document.getElementById('tInput').value);
//     let numberInput = parseFloat(document.getElementById('nInput').value);
//     console.log("Text Input Field: " + textInput2 + "(" + typeof(textInput2) + ")");
//     console.log("Number Input Field: " + numberInput2 + "(" + typeof(numberInput2) + ")");
//     document.getElementById('pfResults').innerHTML = "parseFloat Results: " + (textInput2 + numberInput2);
// }


// Enter Text into HTML
document.getElementById("paragraphPrinciple").innerText = "$" + formulaPrinciple;
document.getElementById("rate").innerText = formulaRate + "%";
if (formulaTime == 1) {
    document.getElementById("time").innerText = formulaTime + " year";
} else {
    document.getElementById("time").innerText = formulaTime + " years";
}
document.getElementById("interest").innerText = "$" + formulaTotalInterest;
document.getElementById("owed").innerText = "$" + formulaTotalOwed;
