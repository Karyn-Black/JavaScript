// Define the Variables
let formulaPrinciple = 10000;
let formulaRate = 2.56;
let formulaRateNew = formulaRate / 100;
let formulaTime = 8;
let formulaTotalOwed = formulaPrinciple * (1+formulaRateNew*formulaTime);
formulaTotalOwed = formulaTotalOwed.toFixed(2);
let formulaTotalInterest;
formulaTotalInterest = formulaTotalOwed-formulaPrinciple;
formulaTotalInterest = formulaTotalInterest.toFixed(2);

// Enter Text into HTML
document.getElementById("principle").innerText = "$" + formulaPrinciple;
document.getElementById("rate").innerText = formulaRate + "%";
document.getElementById("time").innerText = formulaTime + " years";
document.getElementById("interest").innerText = "$" + formulaTotalInterest;
document.getElementById("owed").innerText = "$" + formulaTotalOwed;
