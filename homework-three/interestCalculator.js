// Define the Variables
let formulaPrinciple = 9000;
let formulaRate = 2.56;
formulaRate = formulaRate / 100;
let formulaTime = 8;
let formulaTotalOwed;
// formulaTotalOwed = formulaPrinciple(1+formulaRate*formulaTime);
let formulaTotalInterest;
// formulaTotalInterest = formulaTotalOwed-formulaPrinciple;

// Enter Text into HTML
document.getElementById("principle").innerText = "$" + formulaPrinciple;
document.getElementById("rate").innerText = formulaRate + "%";
document.getElementById("time").innerText = formulaTime + " years";
// document.getElementById("interest").innerText = "$" + formulaTotalInterest;
// document.getElementById("owed").innerText = "$" + formulaTotalOwed;
