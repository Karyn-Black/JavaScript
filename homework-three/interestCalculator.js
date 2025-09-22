// Define the Variables
let formulaPrinciple = 10000;
let formulaRate = 2.56;
let formulaRateNew = formulaRate / 100;
let formulaTime = 8;
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
document.getElementById("principle").innerText = "$" + formulaPrinciple;
document.getElementById("rate").innerText = formulaRate + "%";
if (formulaTime == 1) {
    document.getElementById("time").innerText = formulaTime + " year";
} else {
    document.getElementById("time").innerText = formulaTime + " years";
}
document.getElementById("interest").innerText = "$" + formulaTotalInterest;
document.getElementById("owed").innerText = "$" + formulaTotalOwed;
